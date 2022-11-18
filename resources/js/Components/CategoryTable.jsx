import React from "react";
import CategoryRow from "./CategoryRow";
import Pagination from "./Pagination";

const CategoryTable = ({ categories }) => {
    return (
        <div className="pt-4">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="border-b border-gray-200 bg-white p-6">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="w-20 px-4 py-2">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.data.map(({ id, name }) => (
                                    <CategoryRow id={id} key={id} name={name} />
                                ))}
                            </tbody>
                        </table>

                        <Pagination class="mt-6" links={categories.links} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTable;
