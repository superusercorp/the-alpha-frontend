import * as React from "react";
import AppHeader from "./header"
import Stories from "./Stories/Stories.js"
import StoryDetail from "./StoryDetail/StoryDetail.js"
import Category from "./Categories/Categories"

import AppFooter from "./footer"
import { Route, Switch } from 'react-router-dom'

class AppHtml extends React.Component {
    render() {
        return (
            <html id="foo" lang="en">
                <body>
                <AppHeader />
                    <Switch>
                        <Route exact path="/" component={Stories} />
                        <Route path="/story/:articleTitle" component={StoryDetail} />
                        <Route path="/category/:categoryName" component={Category} />
                    </Switch>
                <AppFooter />
                </body>
            </html>
        );
    }
}

export default AppHtml;

