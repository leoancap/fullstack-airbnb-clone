import * as React from "react"
import { Card } from "antd"
import { withFindListing, WithFindListing } from "@abb/controller"

const { Meta } = Card

class C extends React.PureComponent<WithFindListing> {
  renderListings = (listings: any[]) =>
    listings.map(l => (
      <Card
        key={`${l.id}-card`}
        hoverable={true}
        style={{ width: 240 }}
        cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
      >
        <Meta title={l.name} description={l.owner.email} />
      </Card>
    ))

  render() {
    const { listings, loading } = this.props
    return (
      <div>
        {loading && <div>...loading</div>}
        {this.renderListings(listings)}
      </div>
    )
  }
}

export const FindListingsConnector = withFindListing(C)
