import prisma from "lib/prisma";
import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";

export const statistics = {
  Query: {
    statistics: combineResolvers(isLoggedin, async () => {
      const studentCount = await prisma.student.count();
      const departmentCount = await prisma.department.count();
      const attendanceCount = await prisma.attendance.count();
      const attendanceAbsenceCount = await prisma.attendance.count({
        where: {
          signOutTime: "-",
        },
      });
      return {
        studentCount,
        departmentCount,
        attendanceCount,
        attendanceAbsenceCount,
      };
    }),
  },
};
