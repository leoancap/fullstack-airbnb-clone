import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { ChangePasswordController } from "@abb/controller"

import { ChangePasswordView } from "./ui/ChangePasswordView"

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{
    key: string
  }>
> {
  onFinish = () => {
    this.props.history.push("/login")
  }

  renderView = ({ submit }: any) => {
    const {
      match: {
        params: { key },
      },
    } = this.props
    return (
      <ChangePasswordView
        onFinish={this.onFinish}
        token={key}
        submit={submit}
      />
    )
  }

  render() {
    return (
      <ChangePasswordController>{this.renderView}</ChangePasswordController>
    )
  }
}
