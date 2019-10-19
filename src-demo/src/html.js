import * as React from "react";
import AppHeader from "./header"
import Stories from "./Stories/Stories.js"
import StoryDetail from "./StoryDetail/StoryDetail.js"
import Category from "./Categories/Categories"
import About from "./FooterSlugs/About.js"
import Privacy from "./FooterSlugs/Privacy.js"
import Advertisement from "./FooterSlugs/Advertisement.js"
import JoinUs from "./FooterSlugs/JoinUs.js"
import Contact from "./FooterSlugs/Contact.js"
import AppFooter from "./footer"
import { Route, Switch } from 'react-router-dom'

function AppHtml() {

    const NotFound = () => (
        <div>
       NOT FOUND
        </div>
        );
    
        return (
            <html id="foo" lang="en">
                <body>
                <AppHeader />
                    <Switch>
                        <Route exact path="/" component={Stories} />
                        <Route path="/story/:articleTitle" component={StoryDetail} />
                        <Route path="/category/:categoryName" component={Category} />
                        <Route path="/about/" component={About} />
                        <Route path="/pr/" component={Privacy} />
                        <Route path="/advertisement/" component={Advertisement} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/joinus/" component={JoinUs} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                <AppFooter />
                </body>
            </html>
        );
    }

export default AppHtml;

