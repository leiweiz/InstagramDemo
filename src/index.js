import React, {Component} from "react";
import ReactDom from "react-dom";


import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTitle from './AppTitle';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppTitle />
            </MuiThemeProvider>
        )
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
