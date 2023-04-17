import prisma from "lib/prisma";
import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";

export const statistics = {
  Query: {
    statistics: combineResolvers(isLoggedin, async () => {
      const userCount = await prisma.user.count();
      const departmentCount = await prisma.student.count();
      const attendanceCount = await prisma.attendance.count();
      const attendanceAbsenceCount = await prisma.attendance.count({
        where: {
          signOutTime: "-",
        },
      });
      return {
        userCount,
        departmentCount,
        attendanceCount,
        attendanceAbsenceCount,
      };
    }),
  },
};
