import { merge } from "lodash";
import { users } from "@/resolvers/users";

export const resolvers = merge(
    users
);