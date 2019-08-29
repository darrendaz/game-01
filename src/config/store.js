import { createStore, combineReducers } from "redux"
import playerReducer from "../features/player/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import mapReducer from "../features/map/reducer"

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
