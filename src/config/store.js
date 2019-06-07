import {applyMiddleware, createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import {AsyncStorage} from "react-native";

import reducers from "./../reducers";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: [],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {store, persistor};
}