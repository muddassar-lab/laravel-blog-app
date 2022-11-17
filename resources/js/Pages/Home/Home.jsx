import Sidebar from "@/Components/Sidebar";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="container bg-red-400"></div>
        </div>
    );
};

export default Home;
