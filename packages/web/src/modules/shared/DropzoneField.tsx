import * as React from "react"
import { FieldProps } from "formik"
import Dropzone from "react-dropzone"

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  return (
    <Dropzone
      accept="image/*"
      multiple={false}
      onDrop={([file]) => {
        setFieldValue(name, file)
      }}
      {...props}
    >
      {() => <p>as;dlkfjasdl;fkj</p>}
    </Dropzone>
  )
}
