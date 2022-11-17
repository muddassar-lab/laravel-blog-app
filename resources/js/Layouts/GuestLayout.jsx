import React from "react";

const GuestLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#E5E5E5]">
            {children}
        </div>
    );
};

export default GuestLayout;
