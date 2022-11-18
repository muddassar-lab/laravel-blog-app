import PostTable from "@/Components/PostTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Button } from "@material-tailwind/react";
import React from "react";

const Index = () => {
    const { posts } = usePage().props;

    return (
        <AuthenticatedLayout>
            <div className="pt-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex justify-between border-b border-gray-200 bg-white p-2">
                            <div className="search"></div>
                            <div className="w-[150px]">
                                <Link href={route("posts.create")}>
                                    <Button className="w-[120px]">
                                        Create
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostTable posts={posts} />
        </AuthenticatedLayout>
    );
};

export default Index;
