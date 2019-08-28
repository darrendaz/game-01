import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  player: playerReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(),
)

export default store