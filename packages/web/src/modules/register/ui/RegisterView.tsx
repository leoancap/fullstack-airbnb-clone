import * as React from "react"
import {Form as AntForm, Icon, Button} from "antd"
import {withFormik, FormikProps, Field, Form} from "formik"
import {validUserSchema} from "@abb/common"
import {Link} from "react-router-dom"

import {InputField} from "../../shared/InputField"
import {NormalizedErrorMap} from "@abb/controller/dist"

const FormItem = AntForm.Item

interface FormValues {
  email: string
  password: string
}

interface Props {
  onFinish: () => void
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{display: "flex"}}>
        <div style={{width: 400, margin: "auto"}}>
          <Field
            name="email"
            type="email"
            prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
            placeholder="password"
            component={InputField}
          />
          <FormItem>
            <Link to="/forgot-password">Forgot password</Link>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="./login">login now!</Link>
          </FormItem>
        </div>
      </Form>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({email: "", password: ""}),
  handleSubmit: async (values, {props, setErrors, setSubmitting}) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    } else {
      props.onFinish()
    }
  },
})(C)
