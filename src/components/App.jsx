// import { useState, useEffect } from "react";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import  ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter } from "./Filter/Filter";
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
// import { nanoid } from 'nanoid';

const HomePage = lazy(() => import('../pages/home'));
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