import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3da8c0' //2e3131
    },
    headerContainer: {
        backgroundColor: '#3da8c0',
        width: '100%',
        paddingVertical: calcHeight(2),
        alignItems: 'center',
        marginBottom: calcHeight(100)
    },
    headerText: {
        color: '#FFF',
        fontSize: calcWidth(18),
    },
    buttonContainer: {
        width: calcWidth(275),
        paddingVertical: calcHeight(12),
        backgroundColor: '#2e3131',
        borderRadius: calcWidth(22),
        alignItems: 'center'
    },
    ButtonText: {
        color: '#FFF',
        fontSize: calcWidth(16),
    },
    separator: { height: calcHeight(20) }
});

export default styles;
