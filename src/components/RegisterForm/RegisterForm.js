import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };
    return (
        <Box sx={{ width: '280px', mt: 4}}>
            <form autoComplete="off" onSubmit={handleSubmit}
            
            >
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="name"
          name="name"
          type="text"
          label="Name"
        //   value={dispatch.name}
        //   onChange={handleChange}
        //   error={touched.name && Boolean(errors.name)}
        //   helperText={touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="email"
          name="email"
          type="email"
          label="Email"
          value={dispatch.email}
        //   onChange={handleChange}
        //   error={formik.touched.email && Boolean(formik.errors.email)}
        //   helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="password"
          name="password"
          type="password"
          label="Password"
          value={dispatch.password}
        //   onChange={handleChange}
        //   error={formik.touched.password && Boolean(formik.errors.password)}
        //   helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="contained"
          type="submit"
          size="small"
          sx={{ width: '50%' , marginLeft: '25%'}}
        >
          Register
        </Button>
      </form>
    </Box>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //     <label>
    //         UserName
    //         <input type="text" name="name"/>
    //     </label>
    //     <label>
    //         Email
    //         <input type="email" name="email"/>
    //     </label>
    //     <label>
    //         Password
    //             <input type="password" name="password" />
    //     </label>        
    //         <button type="submit">Register</button>
        
    //     </form> 
    )
}