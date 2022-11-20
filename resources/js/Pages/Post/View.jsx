import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";
import { Input, Textarea } from "@material-tailwind/react";
import React from "react";

const View = () => {
    const { post } = usePage().props;
    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-3xl sm:px-6 lg:px-8">
                    <div className=" bg-white p-2 shadow-sm sm:rounded-lg">
                        <div className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-6">
                            <div>
                                <img
                                    src={post.full_image_path}
                                    className="h-[200px] w-full rounded-md object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="title" className="font-bold">
                                    Title
                                </label>
                                <Input
                                    name="title"
                                    value={post.title}
                                    disabled
                                    className="w-full"
                                    size="lg"
                                    label="title"
                                />
                            </div>
                            <p className="mb-4"></p>
                            <div className="flex w-full flex-row ">
                                <div className="flex flex-1 flex-col">
                                    <label
                                        htmlFor="title"
                                        className="font-bold"
                                    >
                                        Category
                                    </label>
                                    <Input
                                        name="category"
                                        value={post.category.name}
                                        disabled
                                        className="w-full"
                                        size="lg"
                                        label="category"
                                    />
                                </div>
                                <p className="mx-2"></p>
                                <div className="flex flex-1 flex-col">
                                    <label
                                        htmlFor="title"
                                        className="font-bold"
                                    >
                                        Status
                                    </label>
                                    <Input
                                        name="status"
                                        value={post.status}
                                        disabled
                                        className="w-full"
                                        size="lg"
                                        label="status"
                                    />
                                </div>
                            </div>
                            <div className="mx-6 my-5 w-full">
                                <label
                                    htmlFor="description"
                                    className="font-bold"
                                >
                                    Description
                                </label>
                                <Textarea
                                    disabled
                                    name="description"
                                    value={post.description}
                                    label="description"
                                    size="lg"
                                ></Textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default View;
