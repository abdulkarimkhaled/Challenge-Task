/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { StatusBar, Platform, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();
import Navigator from './navigation';
import { CustomToast } from "./components/CustomToast"
import { SafeAreaView } from 'react-native-safe-area-context';

const ProviderComp = () => {
    return (
        <Provider store={store} >
            <StatusBar backgroundColor="#3da8c0" barStyle="light-content" />
            <PersistGate persistor={persistor} />
            <Navigator />
            <CustomToast />
        </Provider>
    )
}

export default function Entrypoint() {
    LogBox.ignoreAllLogs(true)
    if (Platform.OS === 'ios') {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3da8c0' }} >
                <ProviderComp />
            </SafeAreaView>
        )
    } else {
        return (
            <ProviderComp />
        )
    }


}
