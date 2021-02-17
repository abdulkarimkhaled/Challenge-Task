import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, TextInput, FlatList, Image, Animated, Platform } from 'react-native';
import { calcHeight, calcWidth } from '../../config/metrics';
import styles from './styles';
import ButtonText from '../../components/ButtonText'
import Contacts from 'react-native-contacts';
import NavigationService from '../../navigation/NavigationService';
import Images from '../../config/Images';
import { useDispatch } from 'react-redux';
import {
    saveFavorites
} from '../../api/ApisFunctions';
export default ContactsScreen = (props) => {
    const [userContacts, setUserContacts] = useState([]) //contacts array
    const [loading, setLoading] = useState(true) //loading boolean
    const [search, setSearch] = useState('') //search variable
    const [selectedContacts, setSelectedContacts] = useState([])
    const searchRef = useRef(null);
    //animated value for height of selected contacts
    const heightAnimated = useRef(new Animated.Value(selectedContacts.length == 0 ? 0 : calcWidth(150))).current
    //animated value for scaling while removing a node
    const buttonWidth = useRef(new Animated.Value(1)).current
    //creating Animated TouchableOpacity component  
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    const [removedNodeIndex, setRemovedNodeIndex] = useState(-1)
    const dispatch = useDispatch()


    //Read contacts function
    useEffect(() => {
        Contacts.getAll().then(contacts => {
            let tempContacts = [...contacts]
            //sorting the array according to their names
            tempContacts = contacts.sort(function (a, b) {
                if (a.givenName.toLowerCase() < b.givenName.toLowerCase()) return -1;
                if (a.givenName.toLowerCase() > b.givenName.toLowerCase()) return 1;
            })
            setUserContacts(tempContacts)
            setLoading(false)
        })
    }, [])

    //animation function for selected contacts
    startAnimation = (value) => {
        Animated.timing(heightAnimated, {
            toValue: value,
            duration: 300,
        }).start()
    }

    //navigation back function
    const cancelPressed = () => {
        if (selectedContacts.length != 0) {
            global.openToast('Your changes are not saved', 'i')
        }
        NavigationService.goBack()
    }

    //save in presist function
    const savePressed = () => {
        //dispatch action to save in presist state
        dispatch(saveFavorites(selectedContacts))
        if (selectedContacts.length != 0) {
            global.openToast('Chosen contacts added to favorites successfully', 's')
        } else {
            global.openToast('You havent chosen any contact, therefore deleting all your favorite contacts', 'i')
        }

        setTimeout(() => {
            NavigationService.goBack()
        }, 2000);
    }

    //handle tapping on any contact to weather remove the contact or add him 
    const handleUser = (index) => {
        let tempSelected = [...selectedContacts]
        let currentContacts = [...userContacts.filter(item => (item.givenName.includes(search) || item.familyName.includes(search)))]
        let foundIndex = selectedContacts.findIndex(temp => temp.recordID === userContacts[index].recordID)

        if (foundIndex != -1) {
            //remove node
            removeContactNode(foundIndex)
        } else {
            //add node
            tempSelected.push(currentContacts[index])
            setSelectedContacts(tempSelected.sort(function (a, b) {
                if (a.givenName.toLowerCase() < b.givenName.toLowerCase()) return -1;
                if (a.givenName.toLowerCase() > b.givenName.toLowerCase()) return 1;
            }))
            if (tempSelected.length == 1) {
                startAnimation(999)
            }
        }

        console.log(selectedContacts)
    }

    //animation to scale node on remove to 0 then remove it
    animateContact = (value) => {
        Animated.timing(buttonWidth, {
            toValue: value,
            duration: 300,
            useNativeDriver: Platform.OS === 'ios' ? true : false
        }).start()
    }

    //Remove a node from added contacts
    const removeContactNode = (index) => {
        let tempSelected = [...selectedContacts.filter(item => (item.givenName.includes(search) || item.familyName.includes(search)))]
        setRemovedNodeIndex(index)
        animateContact(0)
        setTimeout(() => {
            tempSelected.splice(index, 1)
            if (tempSelected.length == 0) {
                startAnimation(0)
            }
            setSelectedContacts(tempSelected)
            setRemovedNodeIndex(-1)
        }, 300);

    }

    //Render    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <ButtonText
                    buttonContainer={styles.cancelAndSaveContainer}
                    textStyle={styles.headerText}
                    text={'Cancel'}
                    onPress={() => {
                        cancelPressed()
                    }} />
                <View style={styles.participantsContainer} >
                    <ButtonText
                        buttonContainer={styles.participantsText}
                        textStyle={styles.headerText}
                        text={'Add Favorites'}
                        disabled />
                    <Text style={styles.selectedContactsText}>
                        {selectedContacts.length} / {userContacts.length}
                    </Text>
                </View>

                <ButtonText
                    buttonContainer={styles.cancelAndSaveContainer}
                    textStyle={styles.headerText}
                    text={'Save'}
                    onPress={() => {
                        savePressed()
                    }} />
            </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    searchRef.current.focus()
                }}
                style={styles.searchContainer} >
                <Images color={'#585858'} source={'Search'} />
                <TextInput
                    ref={searchRef}
                    placeholder={'Search'}
                    value={search}
                    onChangeText={(text) => { setSearch(text) }}
                    style={styles.searchText}
                />
            </TouchableOpacity>

            {/* Animated View */}

            <Animated.View style={[styles.animatedContainer, { maxHeight: heightAnimated }]}>
                <FlatList
                    horizontal
                    keyboardShouldPersistTaps={'handled'}
                    data={selectedContacts.filter(item => (item.givenName.includes(search) || item.familyName.includes(search)))}
                    keyExtractor={item => item.recordID}
                    renderItem={({ item, index }) =>
                        <AnimatedTouchable
                            activeOpacity={1}
                            onPress={() => {
                                removeContactNode(index)
                            }}
                            style={[styles.animatedUserContainer, {
                                transform: [{ scale: removedNodeIndex == index ? buttonWidth : 1 }]
                            }]} >
                            {item.hasThumbnail ? <Image
                                source={{ uri: item.thumbnailPath }}
                                style={styles.userImageContainer}
                            /> : <Images source={'User'} />}

                            <Text numberOfLines={1} style={styles.selectedNameStyle}  >
                                {item.givenName} {item.familyName}
                            </Text>
                            <View style={styles.removeNodeXContainer} >
                                <Text style={styles.xIcon}  >
                                    X
                            </Text>
                            </View>

                        </AnimatedTouchable>
                    }
                />
            </Animated.View>

            <FlatList
                contentContainerStyle={styles.contactsContainer}
                extraData={userContacts}
                keyboardShouldPersistTaps={'handled'}
                data={userContacts.filter(item => (item.givenName.includes(search) || item.familyName.includes(search)))}
                keyExtractor={item => item.recordID}
                ListEmptyComponent={<Text style={styles.noContactsText} >{loading ? '' : 'No contacts found'}</Text>}
                renderItem={({ item, index }) =>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            handleUser(index)
                        }}
                        style={styles.userContainer} >
                        {item.hasThumbnail ? <Image
                            source={{ uri: item.thumbnailPath }}
                            style={styles.userImageContainer}
                        /> : <Images source={'User'} />}

                        <View style={styles.nameStatusContainer} >
                            <Text style={styles.userNameText} >
                                {item.givenName} {item.familyName}
                            </Text>
                            <Text style={styles.userStatusText} >
                                {item.company}
                            </Text>
                        </View>
                        <View style={styles.selectedContainer} >
                            {selectedContacts.findIndex(x => x.recordID === item.recordID) == -1 ? <View
                                style={styles.selectedCircle} >
                            </View> : <Images source={'Check'} />}
                        </View>

                    </TouchableOpacity>

                }
            />

            {loading &&
                <ActivityIndicator
                    style={{ position: 'absolute', top: '48%' }}
                    size={'large'} color={'#FFF'} />}
        </View>
    )
}
