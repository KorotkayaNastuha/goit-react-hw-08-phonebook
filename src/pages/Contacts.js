import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import ContactForm from "components/ContactForm/ContactForm";
import { ContactList } from "components/Contacts/ContactList";
import { Helmet } from 'react-helmet';
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Phonebook</title>
            </Helmet>
            <ContactForm />
            <div>{isLoading && 'Reguest in progress...'}</div>
            <Filter />
            <ContactList/>
        </>
    )


}