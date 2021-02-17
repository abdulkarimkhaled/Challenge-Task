import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3da8c0' //2e3131
    },
    headerContainer: { flexDirection: 'row', width: '100%' },
    headerText: {
        color: '#FFF',
        fontSize: calcWidth(18),
    },
    cancelAndSaveContainer: {
        width: '25%',
        paddingVertical: calcHeight(2),
        alignItems: 'center',
    },
    participantsContainer: { width: '50%', alignItems: 'center' },
    participantsText: {
        paddingVertical: calcHeight(2),
        alignItems: 'center',
    },
    contactsContainer: { width: calcWidth(375), paddingHorizontal: '5%' },
    userContainer: { flexDirection: 'row', marginTop: calcHeight(10) },
    userImageContainer: {
        width: calcWidth(50),
        height: calcWidth(50),
        borderRadius: calcWidth(25)
    },
    nameStatusContainer: {
        justifyContent: 'center',
        marginLeft: calcWidth(10),
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        width: '70%'
    },
    userNameText: { fontSize: calcWidth(16), fontWeight: 'bold', color: '#303030' },
    userStatusText: { fontSize: calcWidth(14), color: '#303030' },
});

export default styles;
