import * as React from "react"
import { Text, View, ScrollView } from "react-native"

import { Form, Formik, FormikActions, Field } from "formik"

import { withCreateListing, WithCreateListing } from "@abb/controller"
import { RouteComponentProps } from "react-router-native"
import { Card, Button } from "react-native-elements"
import { InputField } from "../../shared/InputField"

interface FormValues {
  picture: null
  name: string
  category: string
  description: string
  price: string
  beds: string
  guests: string
  latitude: string
  longitude: string
  amenities: string[]
}

class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    values: FormValues,
    // { setSubmitting }: FormikActions<FormValues>,
  ) => {
    console.log(values)
    // await this.props.createListing(values)
    // setSubmitting(false)
  }

  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          picture: null,
          name: "",
          category: "",
          description: "",
          price: "0",
          beds: "0",
          guests: "0",
          latitude: "0",
          longitude: "0",
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {({ handleSubmit }) => (
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ScrollView style={{ padding: 20, marginBottom: 20 }}>
              <Text style={{ fontSize: 30, marginBottom: 10 }}>
                Create Listing
              </Text>
              <Field
                label="Name"
                name="name"
                placeholder="Name"
                component={InputField}
              />
              <Field
                label="Category"
                name="category"
                placeholder="Category"
                component={InputField}
              />
              <Field
                label="Category"
                name="description"
                placeholder="Description"
                component={InputField}
              />
              <Field
                label="Price"
                name="price"
                placeholder="Price"
                component={InputField}
                useNumberComponent
              />
              <Field
                label="Beds"
                name="beds"
                placeholder="Beds"
                component={InputField}
                useNumberComponent
              />
              <Field
                label="Guests"
                name="guests"
                placeholder="Guests"
                component={InputField}
                useNumberComponent
              />
              <Field
                label="Latitude"
                name="latitude"
                placeholder="Latitude"
                component={InputField}
                useNumberComponent
              />
              <Field
                label="Longitude"
                name="longitude"
                placeholder="Longitude"
                component={InputField}
                useNumberComponent
              />
              <Button onPress={handleSubmit} title="save listing" />
            </ScrollView>
          </View>
        )}
      </Formik>
    )
  }
}

export const CreateListingConnector = withCreateListing(C)
