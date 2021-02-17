import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: calcHeight(70),
        justifyContent: 'flex-end',
        zIndex: 10001,
        backgroundColor: AppStyles.Color.WHITE,
        position: 'absolute'
    },

    child: {
        flexDirection: "row",
        alignItems: 'flex-end',
        width: "100%",
    },

    leftButton: {
        paddingVertical: calcWidth(10),
        paddingLeft: calcWidth(20),
        paddingRight: calcWidth(8),
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center"
    },
    titleText: {
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(18),
        color: AppStyles.Color.HEADER_TEXT,
        alignSelf: "center",
        maxWidth: calcWidth(300)
    }


});

export default styles;
