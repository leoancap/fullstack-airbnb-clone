import * as React from "react"
import { Field } from "formik"
import { InputField } from "../../../../modules/shared/InputField"

export const Page1 = () => (
  <>
    <Field label="Name" name="name" placeholder="Name" component={InputField} />
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
  </>
)
