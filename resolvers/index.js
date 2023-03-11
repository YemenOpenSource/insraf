import { merge } from "lodash";
import { auth } from "@/resolvers/auth";
import { users } from "@/resolvers/users";
import { students } from "@/resolvers/student";

export const resolvers = merge(
    auth,
    users,
    students
);