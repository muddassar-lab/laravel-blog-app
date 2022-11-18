import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/inertia-react";
import {
    Input,
    Select,
    Option,
    Textarea,
    Button,
} from "@material-tailwind/react";

import React from "react";

const Create = () => {
    const { categories } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        category: "",
        description: "",
        image: "",
    });
    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const submit = () => {
        if (data.title == "" && data.description != "" && data.category != "") {
            return;
        }
        post(route("categories.store"));
    };
    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-3xl sm:px-6 lg:px-8">
                    <div className=" bg-white p-2 shadow-sm sm:rounded-lg">
                        <div className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-6">
                            <div className="flex w-full flex-row ">
                                <Input
                                    value={data.title}
                                    onChange={handleChange}
                                    className="w-full"
                                    size="lg"
                                    label="title"
                                />
                                <p className="mx-2"></p>
                                <Select
                                    defaultValue={categories[0].id}
                                    label="Select Category"
                                    value={data.category}
                                    onChange={handleChange}
                                    size="lg"
                                >
                                    {categories.map((category) => (
                                        <Option value={category.id}>
                                            {category.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div className="mx-6 my-5 w-full">
                                <Textarea
                                    value={data.description}
                                    onChange={handleChange}
                                    label="description"
                                    size="lg"
                                ></Textarea>
                            </div>
                            <div className="flex w-full">
                                <Input
                                    type="file"
                                    value={data.image}
                                    onChange={handleChange}
                                    label="post image"
                                />
                                <div className="mx-2 w-[200px]">
                                    <Button onClick={submit} fullWidth>
                                        Create Post
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
