import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function replace(routeName, params) {

    _navigator.dispatch(
        StackActions.replace({
            routeName,
            params
        })
    );

    // const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: routeName, params: params })],
    // });
    // _navigator.dispatch(resetAction);

}

function reset(routeName, params) {

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: routeName, params: params })],
    });
    _navigator.dispatch(resetAction);

}

function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    replace,
    reset,
    setTopLevelNavigator
};
