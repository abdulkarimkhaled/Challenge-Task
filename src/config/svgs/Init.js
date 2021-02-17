import React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
import { calcHeight, calcWidth } from '../metrics';

const Init = props => (
    <Svg
        width={props.params.width ? calcWidth(props.params.width) : calcWidth(16)}
        height={props.params.height ? calcHeight(props.params.height) : calcHeight(16)}
        style={[{ transform: [{ rotate: (props.params.rotateDegree ? props.params.rotateDegree : 0) + 'deg' }] }, props.params.style]}
        viewBox="0 0 16 16"
        {...props}
    >

        <G id="Layer_2" data-name="Layer 2">
            <G id="Layer_1-2" data-name="Layer 1">
                <G id="Group_12" data-name="Group 12">
                    <Path
                        id="Chat"
                        d="M8 16H1.19a.5.5 0 01-.5-.5.51.51 0 01.11-.31L2 13.71a.33.33 0 000-.41 8 8 0 01-2-5.25A8.05 8.05 0 017.69 0H8a8 8 0 010 16zm3.68-9a1 1 0 101 1 1 1 0 00-1-1zM8 7a1 1 0 101 1 1 1 0 00-1-1zM4.32 7a1 1 0 101 1 1 1 0 00-1-1z"
                        fill={props.params.color ? props.params.color : "#fd687d"}
                    />
                </G>
            </G>
        </G>


    </Svg>

);

export default Init;
