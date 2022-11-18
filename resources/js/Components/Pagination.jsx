import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Pagination = ({ links }) => {
    const getClassName = (active) => {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    };

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="mt-8 flex flex-wrap">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <div
                                key={key}
                                className="mr-1 mb-1 rounded border px-4 py-3 text-sm leading-4 text-gray-400"
                            >
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                key={key}
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
};

export default Pagination;
