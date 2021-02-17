


import ApiConstants from './ApiConstants'
import { URLs } from './ApiConstants'

import { Navigators } from '../navigation/NavigationStack'


type Props = {
    serviceUrl: URLs,
    requestMethod: "POST" | "GET" | "PUT" | "DELETE",
    body?: Object, //for post body
    urlParams?: String, //for get params
    navigationType?: "replace" | "navigate" | "back" | "reset",
    navigateTo?: Navigators,
    setHeader?: true | false,
    extraData?: JSON,
    nextAction?: Function,
    presist?: true | false, //if true will save response in presist
    reducerVariable: String,  //save reducer
    page?: Number,  //for pages
    noToast?: true | false,
    reducerVariableID?: String,
    nextActionFailed?: Function
}




function payload(props: Props) {

    if (checkErrors(props)) {
        let serviceUrl = getUrl(props.serviceUrl)
        let actionType = props.serviceUrl
        let requestMethod = props.requestMethod ? props.requestMethod.toUpperCase() : props.requestMethod
        let body = props.body ? props.body : null
        let urlParams = props.urlParams ? props.urlParams : null
        let navigationType = props.navigationType ? props.navigationType.toLowerCase() : "navigate"
        let navigateTo = props.navigateTo ? props.navigateTo : null
        let setHeader = props.setHeader ? props.setHeader : false
        let extraData = props.extraData ? props.extraData : null
        let nextAction = props.nextAction ? props.nextAction : null
        let presist = props.presist ? props.presist : null
        let reducerVariable = props.reducerVariable ? props.reducerVariable : null
        let page = props.page
        let noToast = props.noToast ? props.noToast : false
        let reducerVariableID = props.reducerVariableID ? props.reducerVariableID : null
        let nextActionFailed = props.nextActionFailed ? props.nextActionFailed : null


        return {
            serviceUrl,
            actionType,
            requestMethod,
            body,
            urlParams,
            navigationType,
            navigateTo,
            setHeader,
            extraData,
            nextAction,
            presist,
            reducerVariable,
            page,
            noToast,
            reducerVariableID,
            nextActionFailed
        }

    }


}

function getAllApiConstants() {
    var keys = "";
    let flag = false
    for (var key in ApiConstants) {
        flag = true
        keys += "\n" + key
        keys += ","
    }

    if (flag) {
        keys += "||"
        keys = keys.replace(",||", "\n ")
    }
    console.log(keys)

    return keys
}




function getUrl(key) {
    return ApiConstants[key]
}




function checkErrors(props) {
    let serviceUrl = props.serviceUrl
    let requestMethod = props.requestMethod ? props.requestMethod.toUpperCase() : null
    let navigationType = props.navigationType ? props.navigationType.toLowerCase() : null

    if (!serviceUrl) {
        console.error("serviceUrl is required")
        return false
    }
    else {

        if (getUrl(serviceUrl) == null) {
            console.error("Invalid serviceUrl \'" + props.serviceUrl +
                "\'. should be one of: (" + getAllApiConstants() + ")")
            return false

        }
    }

    if (!requestMethod) {
        console.error("requestMethod is required")
        return false
    }
    else {
        if (requestMethod == "POST"
            || requestMethod == "GET"
            || requestMethod == "PUT"
            || requestMethod == "DELETE"
        ) { }
        else {
            console.error("Invalid requestMethod \'" + props.requestMethod +
                "\'. should be one of: (\nPOST,\nGET,\nPUT,\nDELETE\n )")
            return false
        }
    }

    if (navigationType && (navigationType == "navigate" || navigationType == "replace" || navigationType == "back" || navigationType == "reset")) { }
    else if (!navigationType) {
        return true
    }
    else {
        console.error("Invalid navigationType \'" + props.navigationType +
            "\'. should be one of: (\nnavigate,\nreplace,\nback,\nreset\n )")
        return false
    }

    return true
}

export default payload