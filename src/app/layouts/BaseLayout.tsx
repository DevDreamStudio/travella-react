import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../providers/AuthProvider";

const BaseLayout: React.FC = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

export default BaseLayout;
