import { GraphQLError } from 'graphql';

export const isLoggedin = (_, __, { user }) => {
  if (!user) throw new GraphQLError("يرجى تسجيل الدخول", {
    extensions: {
      code: 'UNAUTHENTICATED',
      http: { status: 401 },
    },
  })
};