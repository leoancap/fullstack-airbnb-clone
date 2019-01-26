import { ResolverMap } from "../../../types/graphql-utils"
import { Message } from "../../../entity/Message"

export const resolvers: ResolverMap = {
  Mutation: {
    createMessage: async (_, { message }, { session }) => {
      console.log("asdfasdfl;kajsd;flkjasd----------------")
      console.log(session.userId)
      console.log("asdfasdfl;kajsd;flkjasd----------------")
      await Message.create({
        ...message,
        userId: session.userId,
      }).save()

      return true
    },
  },
}
