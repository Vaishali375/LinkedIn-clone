import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, selectUser, logout } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';
import Windgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
         dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
         }));
      }else{
         dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      {!user? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Windgets />
        </div>
      )} 
    </div>
  );
}

export default App;
