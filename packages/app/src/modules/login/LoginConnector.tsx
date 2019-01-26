import * as React from "react"
import { LoginController } from "@abb/controller"
// import {SecureStore} from "expo"

import { LoginView } from "./ui/LoginView"
import { RouteComponentProps } from "react-router-native"
// import {SID_KEY} from "../shared/contansts"

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  // saveSessionId = async (sid: string) => {
  //   SecureStore.setItemAsync(SID_KEY, sid)
  // }

  onFinish = () => {
    this.props.history.push("/me")
  }

  render() {
    return (
      // <LoginController onSessionId={this.saveSessionId}>
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    )
  }
}
