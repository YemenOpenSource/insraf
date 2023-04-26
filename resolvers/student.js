import prisma from "lib/prisma";
import QRcode from "qrcode";
import fs from "fs";
import jwt from "jsonwebtoken";
import { isLoggedin } from "@/middleware/isLoggedin";
import { GraphQLError } from "graphql";
import { combineResolvers } from "graphql-resolvers";
import { transformAttedance } from "@/helper/transform";

export const students = {
  Gender: {
    MALE: "MALE",
    FEMALE: "FEMALE",
  },
  Query: {
    student: combineResolvers(isLoggedin, async (_, { id }) => {
      return await prisma.student.findUnique({
        where: { id: Number(id) },
        include: {
          level: true,
        },
      });
    }),
    departments: combineResolvers(isLoggedin, async () => {
      return prisma.department.findMany({
        include: {
          levels: true,
        },
      });
    }),
    department: combineResolvers(isLoggedin, async (_, { id }) => {
      return prisma.department.findUnique({
        where: { id },
        include: {
          levels: true,
        },
      });
    }),
    levels: combineResolvers(isLoggedin, async () => {
      return prisma.level.findMany({
        include: {
          students: true,
          department: true,
        },
      });
    }),
    level: combineResolvers(isLoggedin, async (_, { id }) => {
      return prisma.level.findUnique({
        where: { id },
        include: {
          students: true,
          department: true,
        },
      });
    }),
    students: combineResolvers(isLoggedin, async () => {
      return prisma.student.findMany({
        include: {
          level: true,
        },
      });
    }),
    studentsByLevel: combineResolvers(isLoggedin, async (_, { levelId }) => {
      return prisma.student.findMany({
        where: { levelId },
        include: {
          level: true,
        },
      });
    }),
    search: combineResolvers(isLoggedin, async (_, { contains }) => {
      const words = contains ? contains : "";
      try {
        let student = await prisma.student.findMany({
          where: {
            name: {
              contains: words,
            },
          },
        });
        return student;
      } catch (error) {
        throw error;
      }
    }),
    searchAttendance: combineResolvers(isLoggedin, async (_, { contains }) => {
      const words = contains ? contains : "";
      if (contains) {
        let attendance = await prisma.attendance.findMany({
          where: {
            student: {
              name: {
                contains: words,
              },
            },
          },
          include: {
            student: true,
          },
        });
        return attendance.map((attendance) => transformAttedance(attendance));
      } else {
        return [];
      }
    }),
    showAttendance: async (_, { id }) => {
      try {
        const attendance = await prisma.attendance.findUnique({
          where: {
            id: Number(id),
          }
        });
        return transformAttedance(attendance);
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createStudent: combineResolvers(isLoggedin, async (_, { studentInput }) => {
      const { name, date, register, classification, password, gender } =
        studentInput;
      try {
        const student = await prisma.student.create({
          data: {
            name,
            date,
            register,
            classification,
            password,
            gender,
            level: {
              connect: {
                id: Number(studentInput.levelId),
              },
            },
          },
        });

        // Generate the qr by using the register
        const data = jwt.sign(`${register},${password}`, process.env.JWT);
        const qrDataURL = QRcode.toDataURL(data, function (err, url) {
          const qrImageBuffer = Buffer.from(url.split(",")[1], "base64");
          const qrImagePath = `public/qr/${register}.png`;
          fs.writeFileSync(qrImagePath, qrImageBuffer);
        });
        return student;
      } catch (error) {
        throw error;
      }
    }),
    deleteStudent: combineResolvers(isLoggedin, async (_, { id }) => {
      try {
        const student = await prisma.student.delete({
          where: {
            id: Number(id),
          },
        });
        return "تم حذف الطالب !";
      } catch (error) {
        throw error;
      }
    }),
    signInAttendance: async (_, { attendanceInput, studentId }) => {
      try {
        const attendance = await prisma.attendance.create({
          data: {
            ...attendanceInput,
            student: {
              connect: {
                id: Number(studentId),
              },
            },
          },
        });
        return attendance;
      } catch (error) {
        throw error;
      }
    },
    signOutAttendance: async (_, { id }) => {
      try {
        const attendance = await prisma.attendance.update({
          where: {
            id: Number(id),
          },
          data: {
            signOutTime: new Date(),
          },
        });
        return transformAttedance(attendance);
      } catch (error) {
        throw error;
      }
    },
    loginStudent: async (_, { token }) => {
      try {
        const decoded = jwt.verify(token, process.env.JWT);
        const student = await prisma.student.findUnique({
          where: {
            register: Number(decoded.split(",")[0]),
          },
        });
        if (!student) throw new GraphQLError("الطالب غير موجود !");
        const isEqual = student.password === decoded.split(",")[1];
        if (!isEqual)
          throw new GraphQLError("كلمة السر غير متطابقة مع رقم القيد");
        return student;
      } catch (error) {
        throw error;
      }
    },
  },
};
