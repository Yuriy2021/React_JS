import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({

    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store)
