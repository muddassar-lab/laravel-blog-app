import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Link, usePage } from "@inertiajs/inertia-react";

const Navbar = () => {
    const { auth } = usePage().props;
    return (
        <div className="navbar flex h-[50px] items-center justify-end bg-white px-5 shadow-md">
            <div>
                <Menu>
                    <MenuHandler>
                        <Button variant="outlined">{auth.user.name}</Button>
                    </MenuHandler>
                    <MenuList>
                        <Link href={route("profile.home")}>
                            <MenuItem>Profile</MenuItem>
                        </Link>
                        <Link href={route("logout")} as="button" method="POST">
                            <MenuItem>Logout</MenuItem>{" "}
                        </Link>
                    </MenuList>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;
