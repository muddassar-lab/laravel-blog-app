import PostTable from "@/Components/PostTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";
import { Input } from "@material-tailwind/react";

import React from "react";

const Show = () => {
    const { category, posts } = usePage().props;

    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex items-center justify-center border-b border-gray-200 bg-white p-6">
                            <label
                                htmlFor=""
                                id="name"
                                className="px-3 text-[17px] font-bold"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                disabled
                                name="name"
                                value={category.name}
                                label="category name"
                                className="px-2"
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <PostTable posts={posts} name={category.name}></PostTable>
        </AuthenticatedLayout>
    );
};

export default Show;
