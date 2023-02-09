import React from "react";
import PropTypes from 'prop-types';
// import css from '../Contacts/Contacts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { getFilter, getContacts } from "../../redux/contacts/selectors";
import { Box, Button, TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
const handleDelete = id => dispatch(deleteContact(id));
  return (
   <Box sx={{ display: 'flex', alignItems: 'flex-end', m:'auto', width: '340px'}}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        label={`${name}:${number}`}
        variant="standard"
      />
       <Button
          variant="contained"
          type="button"
          size="small"
      sx={{ width: '20%' }}
      onClick={()=>handleDelete(id)}
        >
          Delete
      </Button>
      </Box>
       
   
  )
  // // <li className={css.item} ><span>{name}: {number}</span>
    
  //       {/* <button className={css.contactButton} type='button' onClick={()=>handleDelete(id)}>
  //           Delete
  //       </button> */}
  //   // </li>
    
}
const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
  }
}

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
 

  return  <ul>
            {visibleContacts.map(contact => (
              <Contact
                name = {contact.name}
                number = { contact.number}
                id = {contact.id}
                
                key={contact.id}
                ></Contact>  
            ))}
      
          </ul>
}
ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  handleDelete: PropTypes.func,
}