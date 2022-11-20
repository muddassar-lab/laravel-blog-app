import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button, Input } from "@material-tailwind/react";
import PuffLoader from "react-spinners/PuffLoader";
import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import UpdatePasswordBox from "@/Components/UpdatePasswordBox";

const Index = () => {
    const user = usePage().props.auth.user;
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
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
        put(route("profile.update", user.id));
    };

    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-xl sm:px-6 lg:px-8">
                    <div className=" bg-white p-2 shadow-sm sm:rounded-lg">
                        <div>
                            <div className="flex flex-col items-center justify-center border-b border-gray-200 bg-white p-6">
                                <div className="w-full">
                                    <Input
                                        value={data.email}
                                        onChange={handleChange}
                                        name="email"
                                        label="user email"
                                        className="px-2"
                                        size="lg"
                                    />
                                </div>
                                <p className="my-2"></p>
                                <div className="flex w-full flex-row">
                                    <Input
                                        value={data.name}
                                        onChange={handleChange}
                                        name="name"
                                        label="user name"
                                        className="px-2"
                                        size="lg"
                                    />
                                    <p className="mx-2"></p>
                                    <Button
                                        disabled={processing}
                                        className="flex w-[250px] justify-center"
                                        onClick={submit}
                                    >
                                        {" "}
                                        {processing ? (
                                            <PuffLoader
                                                size={16}
                                                color="white"
                                            />
                                        ) : (
                                            "Update Profile"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdatePasswordBox />
        </AuthenticatedLayout>
    );
};

export default Index;
