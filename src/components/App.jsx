// import { useState, useEffect } from "react";
import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";

import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
// import { nanoid } from 'nanoid';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export  function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
      <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
          }
          />
          <Route path="login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
          }
          />
          <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
          }
          />
        </Route>
      </Routes>
    // <div
    //   style={{
    //     // height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     fontSize: 24,
    //     color: '#010101',
    //     backgroundColor: 'azure',
    //   }}
    //   >
        
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //     <h2>Contacts</h2>
    //     <Filter />
    //     {isLoading && !error}
    //   <ContactList />
    // </div>
  );
}