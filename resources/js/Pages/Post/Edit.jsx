import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PuffLoader from "react-spinners/PuffLoader";
import { useForm, usePage } from "@inertiajs/inertia-react";
import {
    Input,
    Select,
    Option,
    Textarea,
    Button,
} from "@material-tailwind/react";

import React, { useEffect, useRef } from "react";

const Edit = () => {
    const { postModel, categories } = usePage().props;
    const input = useRef();
    const { data, setData, post, processing, errors, reset } = useForm({
        title: postModel.title,
        category: postModel.category.id,
        status: postModel.status,
        description: postModel.description,
        image_path: postModel.image_path,
        image: null,
        _method: "PUT",
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
        if (
            data.title == "" &&
            data.description != "" &&
            data.category != "" &&
            data.image_path != ""
        ) {
            return;
        }

        post(route("posts.update", [postModel.id]));
    };
    const onFileChange = async (event) => {
        setData("image", event.target.files[0]);
        input.current.value = event.target.files[0];
    };

    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-3xl sm:px-6 lg:px-8">
                    <div className=" bg-white p-2 shadow-sm sm:rounded-lg">
                        <div className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-6">
                            <div className="w-full">
                                <Input
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    className="w-full"
                                    size="lg"
                                    label="title"
                                />
                            </div>
                            <p className="mb-4"></p>
                            <div className="flex w-full flex-row ">
                                <Select
                                    name="category"
                                    label="Select Category"
                                    value={data.category.toString()}
                                    onChange={(value) => {
                                        setData("category", value);
                                    }}
                                    size="lg"
                                >
                                    {categories.map((category) => (
                                        <Option
                                            key={category.id}
                                            value={category.id.toString()}
                                        >
                                            {category.name}
                                        </Option>
                                    ))}
                                </Select>
                                <p className="mx-2"></p>
                                <Select
                                    value={data.status}
                                    label="Select Active/Inactive"
                                    onChange={(e) => setData("status", e)}
                                    size="lg"
                                >
                                    <Option value="active">Active</Option>
                                    <Option value="inactive">InActive</Option>
                                </Select>
                            </div>
                            <div className="mx-6 my-5 w-full">
                                <Textarea
                                    name="description"
                                    value={data.description}
                                    onChange={handleChange}
                                    label="description"
                                    size="lg"
                                ></Textarea>
                            </div>

                            <div className="flex w-full">
                                <Input
                                    ref={input}
                                    accept="image/*"
                                    type="file"
                                    onChange={onFileChange}
                                    label="post image"
                                />
                                <div className="mx-2 w-[200px] ">
                                    <Button
                                        disabled={processing}
                                        onClick={submit}
                                        className="flex w-[200px] justify-center"
                                        fullWidth
                                    >
                                        {processing ? (
                                            <PuffLoader
                                                size={16}
                                                color="white"
                                            />
                                        ) : (
                                            "Update post"
                                        )}
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

export default Edit;
