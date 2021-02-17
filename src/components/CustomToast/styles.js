import AppStyles from '../../config/styles';


import { calcWidthRatio, calcWidth, calcHeight } from '../../config/metrics';
let { Color, Fonts } = AppStyles


export const styles = {
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    contentContainer: (state) => (
        {
            backgroundColor: state == "error" ? Color.rgba(209, 64, 63, 1) : state == "check" ?
                Color.rgba(118, 207, 17, 1) :
                Color.rgba(51, 181, 229, 1)
            ,

            width: '100%',
            alignItems: 'center',
            borderRadius: calcWidth(15),
            position: 'absolute',
            //justifyContent: 'center'
        }),
    contentView:
    {
        width: '100%',
        bottom: 0,
        position: 'absolute'
    },
    content: {
        width: '100%',
        height: '100%'
    },
    toastText: {
        paddingHorizontal: calcWidthRatio(10),
        paddingVertical: calcHeight(17),
        // backgroundColor: "red",
        fontSize: calcWidth(14),
        color: Color.WHITE,
        maxWidth: calcWidthRatio(330),
        textAlign: "center",
        //fontFamily: AppStyles.fonts.MONTSERRAT_Regular,
    }

}