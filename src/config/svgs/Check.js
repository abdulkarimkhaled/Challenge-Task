import React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
import { calcWidth } from '../metrics';
const Check = props => (
    <Svg
        x="0px"
        y="0px"
        width={calcWidth(20)}
        height={calcWidth(20)}
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        enableBackground="new 0 0 512 512"
        {...props}
    >
        <Ellipse cx={256} cy={256} rx={256} ry={255.832} fill="#32bea6" />
        <Path
            d="M235.472 392.08L114.432 297.784 148.848 253.616 223.176 311.52 345.848 134.504 391.88 166.392z"
            fill="#fff"
        />
    </Svg>
);

export default Check;
