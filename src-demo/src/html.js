import * as React from "react";
import AppHeader from "./header"
import Stories from "./stories"
import AppFooter from "./footer"

class AppHtml extends React.Component {
    render() {
        return (
            <html id="foo" lang="en">
                <body>
                    <AppHeader></AppHeader>
                    <Stories></Stories>
                    <AppFooter></AppFooter>
                </body>
            </html>

        );
    }
}

export default AppHtml;

