
import PropTypes from 'prop-types';
// import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { Box,  TextField } from '@mui/material';
export function Filter() {
    
const dispatch = useDispatch();
const filter = useSelector(getFilter); 
    
const handleChangeFilter = (event) => {
    dispatch(setFilter(event.currentTarget.value))
    }
    
    return (
        <Box sx={{ width: '320px', m: '20px  auto 0'}}>
        <TextField
            fullWidth
            required
            sx={{ mb: '1rem' }}
            variant="outlined"
            type="text"
            name="filter"
            id="name"
            label="Find contacts by Name"
            onChange={handleChangeFilter}
            value={filter}
        />
        
    </Box>
    )
    
    
//     <label className={css.filterLabel}>Find contacts by Name
//         <input
//             type="text"
//             name="filter"
//             onChange={handleChangeFilter}
//             className={css.filterName}
//             value={filter}
//         ></input></label>
    
};

Filter.propTypes = {
    onFilter:PropTypes.func,
}