import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link, useForm } from "@inertiajs/inertia-react";
import PuffLoader from "react-spinners/PuffLoader";
const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    return (
        <GuestLayout>
            <div className="h-auto w-[400px] bg-white p-[30px] shadow-lg">
                <h1 className="text-[20px]">Welcome !</h1>
                <h1 className="mt-5 text-[31px] font-bold">Admin Panel</h1>
                <form onSubmit={submit} className="mt-5">
                    <label htmlFor="name" className="ml-1  font-bold">
                        Name
                    </label>
                    <Input
                        label="name"
                        value={data.name}
                        onChange={handleChange}
                        size="lg"
                        id="name"
                        name="name"
                    />
                    <p className="mb-3 font-bold text-red-400">{errors.name}</p>
                    <label htmlFor="email" className="ml-1  font-bold">
                        Email
                    </label>
                    <Input
                        type={"email"}
                        label="email"
                        value={data.email}
                        onChange={handleChange}
                        size="lg"
                        id="email"
                        name="email"
                    />
                    <p className="mb-3 font-bold text-red-400">
                        {errors.email}
                    </p>
                    <label htmlFor="password" className="ml-1 font-bold">
                        Password
                    </label>
                    <Input
                        type={"password"}
                        label="password"
                        onChange={handleChange}
                        value={data.password}
                        size="lg"
                        id="password"
                        name="password"
                    />
                    <p className="mb-3 font-bold text-red-400">
                        {errors.password}
                    </p>
                    <label
                        htmlFor="confirm_password"
                        className="ml-1  font-bold"
                    >
                        Confirm Password
                    </label>

                    <Input
                        type={"password"}
                        label="confirm password"
                        value={data.password_confirmation}
                        onChange={handleChange}
                        size="lg"
                        id="password_confirmation"
                        name="password_confirmation"
                    />
                    <p className="mb-3 font-bold text-red-400">
                        {errors.password_confirmation}
                    </p>

                    <Button
                        type="submit"
                        fullWidth
                        className="my-8 flex justify-center "
                        size="lg"
                        disabled={processing}
                    >
                        {processing ? (
                            <PuffLoader size={20} color="white" />
                        ) : (
                            "Register"
                        )}
                    </Button>
                    <div className="mb-4 flex justify-center">
                        <Link href={route("login")}>
                            Already have a Account ?{" "}
                            <span className="font-bold">Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default Register;
