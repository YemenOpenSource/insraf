import { merge } from "lodash";
import { auth } from "@/resolvers/auth";
import { users } from "@/resolvers/users";

export const resolvers = merge(
    auth,
    users
);