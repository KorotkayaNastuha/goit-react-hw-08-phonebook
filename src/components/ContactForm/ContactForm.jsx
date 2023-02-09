import { useState } from "react";
// import PropTypes from 'prop-types';
// import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { nanoid } from "nanoid";
import { Box, Button, TextField } from '@mui/material';

export default function ContactForm() { 
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();


const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };
const handleChangeName = event => {
        setName(event.currentTarget.value);
    };
const handleSubmit = (event) => {
    event.preventDefault();
    contacts.some(contact => contact.name === name)
        ? alert(`${name} is already in contacts.`)
        : dispatch(addContact({
            name,
            number,
            id: nanoid(),
        })
        )
    setName('');
    setNumber('');
    };
   
    return (
        <Box sx={{ width: '320px', m: '20px  auto 0'}}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
            fullWidth
            required
            sx={{ mb: '1rem' }}
            variant="outlined"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id="name"
            label="Name"
            onChange={handleChangeName}
            value={name}
        />
        <TextField
            fullWidth
            required
            sx={{ mb: '1rem' }}
            variant="outlined"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            label="Number"
            onChange={handleChangeNumber}
            value={number}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ width: '100%' }}
        >
          Add contact
        </Button>
      </form>
    </Box>
    )
    
    // <form className={css.form} onSubmit={handleSubmit}>
    //         <label className={css.formLabel}>
    //             Name
    //             <input
    //                 type="text"
    //                 name="name"
    //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //                 required
    //                 onChange={handleChangeName}
    //                 value={name}
    //                 className={css.formName}
    //             />
    //         </label>
    //         <label className={css.formLabel}>
    //             Number
    //             <input
    //                 type="tel"
    //                 name="number"
    //                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //                 required
    //                 onChange={handleChangeNumber}
    //                 value={number}
    //                 className={css.formNumber}
    //             />
    //         </label>
    //         <button className={css.formButton} type="submit">Add contact</button>
    //     </form>
    }


