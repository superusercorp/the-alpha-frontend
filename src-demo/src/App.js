import * as React from "react";
// import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
// import { UserList, UserShow, UserCreate, UserEdit } from "./users";
import { Admin, Resource } from "react-admin";
import AppHeader from "./Header/Header.js"
import Stories from "./Stories/Stories.js"
import StoryDetail from './StoryDetail/StoryDetail.js'
import AppHtml from "./html"
import { Route } from 'react-router-dom'

import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import UserIcon from '@material-ui/icons/People';

import { firebaseConfig } from './FIREBASE_CONFIG';
import CustomLoginPage from './CustomLoginPage';

const options = {
  logging: true,
  rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  // app: firebaseAppInstance
  // watch: ['posts'];
  // dontwatch: ['comments'];
}

const authProvider = FirebaseAuthProvider(firebaseConfig, options);
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHtml/>
        <Route path="/" comoponent={Stories} />
        <Route path="stories" comoponent={Stories} />
        <Route path="storydetail" comoponent={StoryDetail} />
      </div>
    );
  }
}

export default App;
