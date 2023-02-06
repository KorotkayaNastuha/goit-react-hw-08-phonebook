import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import Button from '@mui/material/Button';

export const UserMenu = ()=> {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome,{user.name}</p>
            <Button type="button" variant="outlined" size="small" color="error" onClick={() => dispatch(logOut())}>
                LogOut
            </Button>
        </div>
    )
}