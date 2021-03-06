import * as React from "react"
import {withFormik, FormikErrors, FormikProps, Field} from "formik"
import {validUserSchema} from "@abb/common"
import {View, Text} from "react-native"
import {Card, Button} from "react-native-elements"
import {InputField} from "../../shared/InputField"

interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {handleSubmit} = this.props
    return (
      <View style={{flex: 1, display: "flex", justifyContent: "center"}}>
        <Card>
          <Text style={{fontSize: 30, marginBottom: 10}}>Register</Text>
          <Field
            name="email"
            placeholder="Email"
            component={InputField}
            autoCapitalize="none"
            containerStyled={{width: "100%"}}
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
            autoCapitalize="none"
            containerStyled={{width: "100%"}}
          />
          <Button
            style={{marginTop: 30}}
            title="Submit"
            onPress={handleSubmit as any}
          />
        </Card>
      </View>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({email: "", password: ""}),
  handleSubmit: async (values, {props, setErrors}) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
})(C)
