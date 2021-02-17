import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import ButtonText from '../../components/ButtonText'
import NavigationService from '../../navigation/NavigationService';
import { useSelector } from 'react-redux';
import Images from '../../config/Images';

export default Favorites = (props) => {
    const presistState = useSelector(state => state.presistReducer)
    const [favorites, setFavorites] = useState([])

    //set fav contacts from presist state
    useEffect(() => {
        setFavorites(presistState.data.userFavoriteContacts)
    }, [])

    //Render    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <ButtonText
                    buttonContainer={styles.cancelAndSaveContainer}
                    textStyle={styles.headerText}
                    text={'Cancel'}
                    onPress={() => {
                        NavigationService.goBack()
                    }} />
                <View style={styles.participantsContainer} >
                    <ButtonText
                        buttonContainer={styles.participantsText}
                        textStyle={styles.headerText}
                        text={'Favorite contacts'}
                        disabled />
                </View>
            </View>
            <FlatList
                contentContainerStyle={styles.contactsContainer}
                keyboardShouldPersistTaps={'handled'}
                data={favorites}
                keyExtractor={item => item.recordID}
                renderItem={({ item, index }) =>
                    <TouchableOpacity
                        activeOpacity={1}
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
                    </TouchableOpacity>
                }
            />
        </View>
    )
}
