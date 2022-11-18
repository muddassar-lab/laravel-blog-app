import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

import React from "react";

const AuthenticatedLayout = ({ children }) => {
    return (
        <div className="flex bg-[#E5E5E5]">
            <Sidebar />
            <div className=" container ">
                <Navbar />
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
