import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import Sendmail from "./components/Sendmail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import Login  from "./components/Login";
import { auth } from "./components/firebase.jsx";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
          
        dispatch(
          login({
            displayName: user,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      }else {

      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <Sendmail />}
        </div>
      )}
    </Router>
  );
}

export default App;
