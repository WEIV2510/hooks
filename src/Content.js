import React, { useContext } from "react";
import { userContext } from "./Context";

export function Context() {
  let user = useContext(userContext);
  return <h3>hello,{user}</h3>;
}
