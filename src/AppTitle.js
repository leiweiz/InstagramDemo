import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class AppTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title = "InstagramDemo"
            />
        );
    }
}

export default AppTitle;
