import payload from "./payload"
import { requestAction, saveResponsePresist } from "../actions/Actions"

export function login(body, extraData) {
    return requestAction(
        payload(
            {
                serviceUrl: "LOGIN",
                requestMethod: "POST",
                navigationType: 'replace',
                //setHeader:true,
                navigateTo: "Tabs",
                body: body,
                // nextAction,
                reducerVariable: "userData",
                presist: true,
                extraData: extraData
            }
        )
    )
}

export function saveFavorites(favoritesList) {
    return saveResponsePresist(
        {
            reducerVariable: "userFavoriteContacts",
            presist: true,
        },
        favoritesList
    )
}