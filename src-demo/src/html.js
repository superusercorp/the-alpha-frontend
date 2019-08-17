import * as React from "react";
import AppHeader from "./header"
import Stories from "./stories"

class AppHtml extends React.Component {
    render() {
        return (
            <html id="foo" lang="en">
                <body><AppHeader></AppHeader></body>
            </html>
        );
    }
}

export default AppHtml;

