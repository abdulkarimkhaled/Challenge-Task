import { put, call, select } from 'redux-saga/effects';
import { API } from "../api"
import * as Actions from '../actions/Actions';


export default function* generalSaga(action) {

  let currentState = yield select()
  // API.setHeader('Accept-Language', getAppLanguage())
  console.log("Current State : ", action.payload.actionType, currentState)

  if (action.payload.setHeader) {
    let token = currentState.presistReducer.data.userData.access_token
    API.setHeader("Authorization", "Bearer " + token)
  }

  console.log("%c" + "Data received with action " + action.payload.actionType + " in saga : ", "background: Aqua", action.payload)

  yield put(Actions.enableLoader(action.payload.actionType));
  let callMethod =
    action.payload.requestMethod == "POST" ? API.post :
      action.payload.requestMethod == "GET" ? API.get :
        action.payload.requestMethod == "PUT" ? API.put :
          action.payload.requestMethod == "DELETE" ? API.delete : null



  const response = yield call( // open socket between server
    callMethod,
    action.payload.serviceUrl + (action.payload.urlParams ? (action.payload.urlParams) : "")
    +
    ((action.payload.page && action.payload.urlParams && action.payload.urlParams.toString().includes("?")) ? ("&page=" + action.payload.page)
      :
      (action.payload.page ? ("?page=" + action.payload.page) : "")
    )
    ,
    (action.payload.body ? action.payload.body : {})
  );

  console.log("%c" + action.payload.actionType + " Response : ", "background:green;color:white", "", response)

  try {
    //Will edit this section according to the api response 
    if (response.ok) {

    }
  }
  catch {
    global.openToast("NetworkError", "e")
  }
}

