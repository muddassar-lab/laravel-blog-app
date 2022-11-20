import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link, useForm } from "@inertiajs/inertia-react";
import PuffLoader from "react-spinners/PuffLoader";
const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
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
        post(route("login"));
    };
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);
    return (
        <GuestLayout>
            <div className="h-[550px] w-[400px] bg-white p-[30px] shadow-lg">
                <h1 className="text-[20px]">Welcome !</h1>
                <h1 className="mt-5 text-[31px] font-bold">Admin Panel</h1>
                <form onSubmit={submit} className="my-5">
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
                    <label htmlFor="email" className="ml-1 font-bold">
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
                    <p className="font-bold text-red-400">{errors.password}</p>
                    <div className="flex justify-end py-2">
                        <Link className=" text-[12px] font-bold">
                            Forgot Password?
                        </Link>
                    </div>
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
                            "Login"
                        )}
                    </Button>
                    <div className="flex justify-center">
                        <Link href={route("register")}>
                            Don’t have an Account ?{" "}
                            <span className="font-bold">Register</span>
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default Login;
