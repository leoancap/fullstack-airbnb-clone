import * as React from "react"
import { Field } from "formik"
import { InputField } from "../../../../modules/shared/InputField"
import { TagField } from "../../../../modules/shared/TagField"

export const Page3 = () => (
  <>
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
    <Field name="amenities" placeholder="Amenities" component={TagField} />
  </>
)
