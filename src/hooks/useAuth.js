import { useSelector } from "react-redux"
import { selectIsLoggenIn, selectIsRefreshing, selectUser } from "redux/auth/selectors"

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggenIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};