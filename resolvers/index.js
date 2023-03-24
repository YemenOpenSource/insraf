import { merge } from "lodash";
import { auth } from "@/resolvers/auth";
import { users } from "@/resolvers/users";
import { students } from "@/resolvers/student";
import { Level } from "@/resolvers/Level";
import { department } from "@/resolvers/department";

export const resolvers = merge(
    auth,
    users,
    students,
    Level,
    department
);