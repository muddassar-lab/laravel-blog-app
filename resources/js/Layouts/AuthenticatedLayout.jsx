import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { usePage } from "@inertiajs/inertia-react";
import { Alert } from "@material-tailwind/react";
import React from "react";

const AuthenticatedLayout = ({ children }) => {
    const props = usePage().props;

    return (
        <div className="flex bg-[#E5E5E5]">
            <Sidebar />
            <div className=" container ">
                <Navbar />
                <div>
                    {props.flash != null &&
                    (props.flash.success != null ||
                        props.flash.error != null) ? (
                        <div className="mx-20 my-5">
                            {props.flash.success != null ? (
                                <Alert color="green">
                                    {props.flash.success}
                                </Alert>
                            ) : null}
                            {props.flash.error != null ? (
                                <Alert color="red">{props.flash.error}</Alert>
                            ) : null}
                        </div>
                    ) : null}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
