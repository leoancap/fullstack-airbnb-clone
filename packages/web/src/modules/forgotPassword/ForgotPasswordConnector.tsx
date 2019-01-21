import * as React from "react"
import { ForgotPasswordController } from "@abb/controller"

import { ForgotPasswordView } from "./ui/ForgotPasswordView"
import { RouteComponentProps } from "react-router-dom"

export class ForgotPasswordConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/reset-password", {
      message: "Check your email to reset your password",
    })
  }

  renderView = ({ submit }: any) => (
    <ForgotPasswordView onFinish={this.onFinish} submit={submit} />
  )

  render() {
    return (
      <ForgotPasswordController>{this.renderView}</ForgotPasswordController>
    )
  }
}
