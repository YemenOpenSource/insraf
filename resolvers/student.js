import prisma from "lib/prisma";
import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";
import { GraphQLError } from "graphql";

export const students = {
    Gender: {
        MALE: 'MALE',
        FEMALE: 'FEMALE',
    },
    Query: {
        allStudents: combineResolvers(isLoggedin, async () => {
            return await prisma.student.findMany()
        }),
        student: combineResolvers(isLoggedin, async (_, { id }) => {
            return await prisma.student.findUnique({ where: { id: Number(id) } })
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
    },
    Mutation: {
        createStudent: combineResolvers(isLoggedin, async (_, { studentInput }) => {
            try {
                const student = await prisma.student.create({
                    data: {
                        name: studentInput.name,
                        date: studentInput.date,
                        register: studentInput.register,
                        classifiction: studentInput.classifiction,
                        password: studentInput.password,
                        gender: studentInput.gender,
                        levelId: studentInput.levelId
                    },
                });
                return student;
            } catch (error) {
                throw error;
            }
        })
    }
};

