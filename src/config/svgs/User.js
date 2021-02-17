import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { calcWidth } from '../metrics';
const User = props => (
    <Svg
        width={calcWidth(50)}
        height={calcWidth(50)}
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        {...props}>
        <Circle
            cx={25}
            cy={25}
            fill="none"
            r={24}
            stroke="#E8E8E8"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        />
        <Path fill="none" d="M0 0H50V50H0z" />
        <Path fill='#E8E8E8' d="M29.933 35.528c-.146-1.612-.09-2.737-.09-4.21.73-.383 2.038-2.825 2.259-4.888.574-.047 1.479-.607 1.744-2.818.143-1.187-.425-1.855-.771-2.065.934-2.809 2.874-11.499-3.588-12.397-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922 6.686-7.981 14.156-.345.21-.913.878-.771 2.065.266 2.211 1.17 2.771 1.744 2.818.22 2.062 1.58 4.505 2.312 4.888 0 1.473.055 2.598-.091 4.21-1.261 3.39-7.737 3.655-11.473 6.924 3.906 3.933 10.236 6.746 16.916 6.746s14.532-5.274 15.839-6.713c-3.713-3.299-10.204-3.555-11.468-6.957z" />
    </Svg>
);

export default User;
