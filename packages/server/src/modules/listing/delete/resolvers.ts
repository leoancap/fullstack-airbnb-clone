import { ResolverMap } from "../../../types/graphql-utils"
import { Listing } from "../../../entity/Listing"
import { isAuthenticated } from "../../shared/isAuthenticated"

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      // isAuthenticated(session)

      const listing = await Listing.findOne({ where: { id } })

      if (!listing) {
        throw new Error("does not exist")
      }

      if (listing.userId !== session.userId) {
        throw new Error("not authorized")
      }

      await Listing.remove(listing)

      return true
    },
  },
}
