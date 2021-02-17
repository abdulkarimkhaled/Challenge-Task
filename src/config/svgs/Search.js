import React from "react";
import Svg, { Path } from "react-native-svg";
import { calcWidth } from '../metrics';
const Search = props => (
    <Svg viewBox="0 0 24 24"
        width={props.params.width ? calcWidth(props.params.width) : calcWidth(24)}
        height={props.params.height ? calcWidth(props.params.height) : calcWidth(24)} {...props}>
        <Path fill={props.params.color ? props.params.color : "#000"} d="M22 20l-2 2-6-6v-2h2z" />
        <Path fill={props.params.color ? props.params.color : "#000"} d="M9 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM9 4C6.2 4 4 6.2 4 9s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
        <Path fill={props.params.color ? props.params.color : "#000"} d="M12.624 13.401l.707-.707 2.475 2.475-.708.707z" />
    </Svg>
);

export default Search;
