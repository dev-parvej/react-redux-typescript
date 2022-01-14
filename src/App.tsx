import React from "react";
import {Repositories} from "./repository/Index";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return <Provider store={store}>
        <Repositories/>
    </Provider>
}

export default App;
