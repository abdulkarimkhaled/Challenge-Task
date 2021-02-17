import React from 'react'
// import Svg, { Defs, Path } from 'react-native-svg'
import Svg, { G, Path, Defs, LinearGradient, Stop, Polygon, Rect, Mask, Use } from 'react-native-svg'
import { calcWidth, calcHeight } from '../../../config/metrics'




const Check = props => (
  <Svg width={calcWidth(37.027)} height={calcHeight(37.027)} viewBox="0 0 37.027 37.027" {...props}>
    <Path
      d="M18.514 0a18.514 18.514 0 1018.513 18.514A18.535 18.535 0 0018.514 0zm10.573 13.207l-13.34 13.34a1.542 1.542 0 01-2.182 0L6.4 19.378a.771.771 0 010-1.091L7.488 17.2a.772.772 0 011.091 0l6.078 6.078 12.248-12.252a.772.772 0 011.091 0l1.091 1.091a.771.771 0 010 1.09z"
      fill="#fff"
    />
  </Svg>
)

export default Check