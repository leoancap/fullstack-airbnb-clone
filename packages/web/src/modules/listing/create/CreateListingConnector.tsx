import * as React from "react"
import { Form, Formik, FormikActions } from "formik"
import { Form as AntForm, Button } from "antd"
import { RouteComponentProps, Link } from "react-router-dom"

import { Page1 } from "./ui/Page1"
import { Page2 } from "./ui/Page2"
import { Page3 } from "./ui/Page3"
import { withCreateListing, WithCreateListing } from "@abb/controller"

const FormItem = AntForm.Item

interface FormValues {
  picture: File | null
  name: string
  category: string
  description: string
  price: number
  beds: number
  guests: number
  latitude: number
  longitude: number
  amenities: string[]
}

interface State {
  page: number
}

const pages = [<Page1 />, <Page2 />, <Page3 />]

class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing,
  State
> {
  state = {
    page: 0,
  }

  submit = async (
    values: FormValues,
    { setSubmitting }: FormikActions<FormValues>,
  ) => {
    await this.props.createListing(values)
    setSubmitting(false)
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    return (
      <Formik<FormValues>
        initialValues={{
          picture: null,
          name: "",
          category: "",
          description: "",
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, isValid, values }) =>
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <Link to="/logout">logout</Link>
              <div style={{ width: 400, margin: "auto" }}>
                {pages[this.state.page]}
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {this.state.page === pages.length - 1 ? (
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          create listing
                        </Button>
                      </div>
                    ) : (
                      <Button type="primary" onClick={this.nextPage}>
                        next page
                      </Button>
                    )}
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
      </Formik>
    )
  }
}

export const CreateListingConnector = withCreateListing(C)
