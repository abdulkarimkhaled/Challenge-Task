
import * as React from 'react'

import Init from "./svgs/Init"
import Search from "./svgs/Search"
import User from "./svgs/User"
import Check from "./svgs/Check"

type Props = {
  source: "Init" | "Search" | "User" | "Check"
  ,
  width?: Number,
  height?: Number,
  color?: String,
  rotateDegree?: Number,
  opacity?: Number,
  style?: Object,
  selected: Boolean
}

function Images(props: Props) {
  switch (props.source) {
    case 'Init':
      return <Init params={props} />;
    case 'Search':
      return <Search params={props} />;
    case 'User':
      return <User params={props} />;
    case 'Check':
      return <Check params={props} />;
    default:
      return null;
  }
}

export default Images;
