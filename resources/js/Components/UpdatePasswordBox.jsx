import { useForm } from "@inertiajs/inertia-react";
import { Button, Input } from "@material-tailwind/react";
import PuffLoader from "react-spinners/PuffLoader";
import React, { useEffect } from "react";

const UpdatePasswordBox = () => {
    const { data, setData, put, processing, errors, reset } = useForm({
        current_password: "",
        new_password: "",
        confirm_new_password: "",
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
        put(route("profile.password.update"));
    };
    useEffect(() => {
        return () => {
            reset("confirm_new_password", "current_password", "new_password");
        };
    }, []);

    return (
        <div className="pt-4">
            <div className=" max-w-xl sm:px-6 lg:px-8">
                <div className=" bg-white p-6 shadow-sm sm:rounded-lg">
                    <Input
                        type={"password"}
                        label="Old Password"
                        name="current_password"
                        value={data.current_password}
                        onChange={handleChange}
                    />
                    <p className="my-4"></p>
                    <Input
                        type={"password"}
                        label="New Password"
                        name="new_password"
                        value={data.new_password}
                        onChange={handleChange}
                    />
                    <p className="my-4"></p>
                    <div className="flex flex-row">
                        <Input
                            type={"password"}
                            label="Confirm New Password"
                            name="confirm_new_password"
                            value={data.confirm_new_password}
                            onChange={handleChange}
                        />
                        <p className="mx-1"></p>
                        <Button
                            onClick={submit}
                            disabled={processing}
                            className="flex w-[250px] justify-center"
                        >
                            {" "}
                            {processing ? (
                                <PuffLoader size={16} color="white" />
                            ) : (
                                "Update Password"
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePasswordBox;
