import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

const Sidebar = () => {
    const { url } = usePage();
    return (
        <div className="sticky top-0 flex h-screen w-[288px] flex-col bg-gray-900 p-3 shadow">
            <div className="space-y-3">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <h2 className="text-3xl font-bold text-white">
                            Admin Panel
                        </h2>
                    </Link>
                </div>

                <div className="flex-1">
                    <ul className="space-y-1 pt-2 pb-4 text-sm">
                        <li
                            className={`
                            flex justify-center rounded-sm border-r-4 
                            ${
                                url.startsWith("/categories")
                                    ? "border-white bg-gray-800"
                                    : "border-gray-900 bg-gray-900"
                            }    
                            py-2`}
                        >
                            <Link
                                href="/categories"
                                className="flex items-center space-x-3 rounded-md p-2"
                            >
                                <span className="text-[25px]  text-white">
                                    Categories
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`
                            flex justify-center rounded-sm border-r-4 
                            ${
                                url.startsWith("/posts")
                                    ? "border-white bg-gray-800"
                                    : "border-gray-900 bg-gray-900"
                            }    
                            py-2`}
                        >
                            <Link
                                href="/posts"
                                className="flex items-center space-x-3 rounded-md p-2"
                            >
                                <span className="text-[25px]  text-white">
                                    Posts
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`
                            flex justify-center rounded-sm border-r-4 
                            ${
                                url.startsWith("/payments")
                                    ? "border-white bg-gray-800"
                                    : "border-gray-900 bg-gray-900"
                            }    
                            py-2`}
                        >
                            <Link
                                href="/payments"
                                className="flex items-center space-x-3 rounded-md p-2"
                            >
                                <span className="text-[25px]  text-white">
                                    Payments
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
