import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { UserList, UserShow, UserCreate, UserEdit } from "./users";
import { Admin, Resource } from "react-admin";
import AppHeader from "./header"
import Stories from "./stories"


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
      <AppHeader>

<Stories></Stories>
      </AppHeader>

    );
  }
}

export default App;
