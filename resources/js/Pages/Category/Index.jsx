import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import CategoryRow from "@/Components/CategoryRow";
import CategoryTable from "@/Components/CategoryTable";

const Index = () => {
    const { categories } = usePage().props;

    return (
        <AuthenticatedLayout>
            <div className="pt-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex justify-between border-b border-gray-200 bg-white p-2">
                            <div className="search"></div>
                            <div className="w-[150px]">
                                <Link href={route("categories.create")}>
                                    <Button className="w-[120px]">
                                        Create
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryTable categories={categories} />
        </AuthenticatedLayout>
    );
};

export default Index;
