import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import PuffLoader from "react-spinners/PuffLoader";
const Edit = () => {
    const { category, errors } = usePage().props;
    const { data, setData, put, processing, reset } = useForm({
        name: "",
        id: "",
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
        if (data.name == "" && data.id != null) {
            return;
        }
        put(route("categories.update", category.id));
    };

    useEffect(() => {
        setData({ name: category.name, id: category.id });
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-col items-start justify-center border-b border-gray-200 bg-white p-6">
                            <div className="flex w-full flex-row items-center">
                                <Input
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    label="category name"
                                    className="px-2"
                                    size="lg"
                                />
                                <p className="mx-2"></p>
                                <Button
                                    className="flex w-[120px] justify-center"
                                    onClick={submit}
                                >
                                    {" "}
                                    {processing ? (
                                        <PuffLoader size={20} color="white" />
                                    ) : (
                                        "Update"
                                    )}
                                </Button>
                            </div>
                            <p className="my-2 font-bold text-red-400">
                                {errors.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
