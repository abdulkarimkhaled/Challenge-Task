import React, { } from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
    text: String,
    buttonContainer: Object,
    textStyle: Object,
    disabled: Boolean,
    onPress: Function
}

export default ButtonText = (props: Props) => {
    let { text, buttonContainer, textStyle, disabled, onPress } = props

    //Render
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled ? disabled : false}
            style={buttonContainer}>
            <Text style={textStyle} >
                {text}
            </Text>
        </TouchableOpacity>
    )

}
