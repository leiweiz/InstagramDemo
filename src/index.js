import React, {Component} from "react";
import ReactDom from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hi</div>;
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
