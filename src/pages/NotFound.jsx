import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        // Your condition to trigger the redirect
        setShouldRedirect(true);
    }, []);

    useEffect(() => {
        if (shouldRedirect) {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 2000);

        // Cleanup the timeout if the component unmounts or if the redirect happens earlier
        return () => clearTimeout(timeoutId);
        }
    }, [shouldRedirect, navigate]);

    return (
        <>
            <h1>404: Page Not Found</h1>
            <p>Nice, try! Let's get you back home...</p>
        </>
    )
};

export default NotFound;