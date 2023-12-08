import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function GuestAuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    );
};