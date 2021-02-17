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
        paddingTop: calcHeight(7)
    },
    participantsContainer: { width: '50%', alignItems: 'center' },
    participantsText: {
        paddingVertical: calcHeight(2),
        alignItems: 'center',
    },
    selectedContactsText: {
        color: '#FFF',
        fontSize: calcWidth(14),
    },
    searchContainer: {
        width: '90%',
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        flexDirection: 'row',
        padding: calcWidth(5),
        borderRadius: calcWidth(10),
        marginTop: calcHeight(12)
    },
    searchText: {
        color: '#585858',
        fontSize: calcWidth(18),
        marginLeft: calcWidth(10)
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
    selectedContainer: {
        width: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
    selectedCircle: {
        width: calcWidth(20),
        height: calcWidth(20),
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#505050'
    },
    animatedContainer: {
        width: '95%',
        backgroundColor: '#3da8c0',
        marginTop: calcHeight(10)
    },
    animatedUserContainer: {
        width: calcWidth(90),
        alignItems: 'center',
    },
    selectedNameStyle: {
        alignSelf: 'center',
        paddingTop: calcWidth(2),
        fontSize: calcWidth(14)
    },
    removeNodeXContainer: {
        position: 'absolute',
        backgroundColor: '#707070',
        alignSelf: 'center',
        right: calcWidth(16),
        width: calcWidth(20),
        height: calcWidth(20),
        borderRadius: calcWidth(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    xIcon: {
        fontSize: calcWidth(14),
        color: '#FFF'
    },
    noContactsText: {
        width: '100%',
        alignSelf: 'center',
        marginTop: calcHeight(150),
        fontSize: calcWidth(20),
        color: '#585858',
        textAlign: 'center'
    }
});

export default styles;
