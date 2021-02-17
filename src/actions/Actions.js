/*
 * Reducer actions related with App
 */

export function requestAction(payload) {
    return {
        type: "REQUEST_ACTION",
        payload
    };
}


export function saveResponseGeneral(payload, response) {
    return {
        type: "SAVE_GENERAL_REDUCER",
        payload,
        response
    };
}

export function saveResponsePresist(payload, response) {
    return {
        type: "SAVE_PRESIST_REDUCER",
        payload,
        response
    };
}

export function clearPresist() {

    return {
        type: "CLEAR_PRESIST_REDUCER",
    };
}

//Loaders Actions
export function enableLoader(apiType) {
    return {
        type: "ENABLE_LOADER",
        apiType
    };
}
export function disableLoader(apiType) {
    return {
        type: "DISABLE_LOADER",
        apiType
    };
}

