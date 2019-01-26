import * as React from "react"
import { Text, ScrollView } from "react-native"
import { Card } from "react-native-elements"
import { withFindListing, WithFindListing } from "@abb/controller"

export class C extends React.PureComponent<WithFindListing> {
  render() {
    const { listings } = this.props
    return (
      <ScrollView style={{ marginTop: 10 }}>
        {listings.map(l => (
          <Card
            style={{ marginTop: 1 }}
            key={`${l.id}-flc`}
            title={l.name ? l.name : "no name"}
            image={l.pictureUrl ? { uri: l.pictureUrl } : undefined}
          >
            <Text style={{ marginBottom: 10 }}>owner: {l.owner.email}</Text>
          </Card>
        ))}
      </ScrollView>
    )
  }
}

export const FindListingsConnector = withFindListing(C)
