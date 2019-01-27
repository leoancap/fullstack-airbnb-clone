import { ResolverMap } from "../../../types/graphql-utils"
import { Message } from "../../../entity/Message"
import { PUBSUB_NEW_MESSAGE } from "../shared/constants"

export const resolvers: ResolverMap = {
  Subscription: {
    newMessage: {
      subscribe: (_, __, { pubsub }) => {
        return pubsub.asyncIterator(PUBSUB_NEW_MESSAGE)
      },
    },
  },
}
