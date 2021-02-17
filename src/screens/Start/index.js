import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import styles from './styles';
import ButtonText from '../../components/ButtonText'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import NavigationService from '../../navigation/NavigationService';
import { useSelector } from 'react-redux';

export default Start = (props) => {
    const presistState = useSelector(state => state.presistReducer)

    //request permission from ios and android function
    const requestPermission = () => {
        request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.CONTACTS :
                PERMISSIONS.ANDROID.READ_CONTACTS)
            .then((result) => {
                global.closeToast()
                checkPermission()
            });
    }

    //Check permission for ios and android function
    const checkPermission = () => {
        check(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.CONTACTS :
                PERMISSIONS.ANDROID.READ_CONTACTS)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('checkPermission', result)
                        global.openToast('This feature is not available (on this device / in this context)', 'i');
                        break;
                    case RESULTS.DENIED:
                        console.log('checkPermission', result)
                        global.openToast('The permission has not been denied', 'e');
                        requestPermission()
                        break;
                    case RESULTS.LIMITED:
                        // 
                        break;
                    case RESULTS.GRANTED:
                        console.log('checkPermission', result)//navigate
                        NavigationService.navigate('ContactsScreen')
                        break;
                    case RESULTS.BLOCKED:
                        global.openToast('The permission has been blocked', 'e');
                        break;
                }
            })
            .catch((error) => {
                // …
            });
    }

    //onPress view contacts button function
    const viewContacts = () => {
        checkPermission()
    }

    const favoritesNavigate = () => {
        // check if data array in presist state has any attribute
        // then check if fav list exists 
        // then check if the list has atleast 1 element // if so navigate to favorites else open error toast
        if (presistState.data && presistState.data.userFavoriteContacts &&
            presistState.data.userFavoriteContacts.length != 0) {
            NavigationService.navigate('Favorites')
        } else {
            global.openToast('You do not have any contacts saved', 'e')
        }
    }
    //Render    
    return (
        <View style={styles.container}>
            <ButtonText
                buttonContainer={styles.headerContainer}
                textStyle={styles.headerText}
                text={'Shezlong Task app'}
                disabled />
            <ButtonText
                buttonContainer={styles.buttonContainer}
                textStyle={styles.ButtonText}
                text={'View contacts'}
                onPress={() => viewContacts()}
            />
            <View style={styles.separator} />
            <ButtonText
                buttonContainer={styles.buttonContainer}
                textStyle={styles.ButtonText}
                text={'View favorites'}
                onPress={() => favoritesNavigate()}
            />
        </View>
    )
}