import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
} from "@heroui/react";
import { Link as LinkRouter } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from '../context/ModalContext'
import { FormStepsContext } from "../context/FormStepsContext";
import { Sidebar } from "./Sidebar";

export const Navigation = () => {

    const { onModal } = useContext(ModalContext);

    const navItems = [
        {
            path: '/',
            name: 'Inicio'
        },
        {
            path: '/login',
            name: 'Iniciar sesión'
        },
        {
            path: '/register',
            name: 'Regístrate'
        },
        {
            path: '/dashboard',
            name: 'Dashboard'
        },
    ];
    const { session } = useContext(FormStepsContext);
    return(
    <div className="max-w-[1024px] m-auto">
     <Navbar disableAnimation className="p-5 shadow-sm">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">logo</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Logo</p>
                </NavbarBrand>
                {
                    session && (
                        navItems.map((item, index) => (
                            <NavbarItem key={index} >
                                <LinkRouter color="foreground" to={item.path}>
                                    {/* {item.name} */}
                                </LinkRouter>
                            </NavbarItem>
                        ))
                    )
                }
            </NavbarContent>

            {!session && (
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button 
                            as={LinkRouter}
                            className="text-indigo-600 bg-white"
                            radius="full"
                            size="md"
                            variant="flat"
                            to={'/'}>
                            Inicio
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button 
                            as={LinkRouter}
                            className="bg-indigo-600 text-white"
                            radius="full"
                            size="md"
                            variant="shadow"
                            onPress={() => { onModal('register') }} >
                            Regístrate
                        </Button>
                    </NavbarItem>
                </NavbarContent>)}

            

            <NavbarMenu>
                {navItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`}>
                    <LinkRouter className="w-full" to={item.path} size="lg">
                        {item.name}
                    </LinkRouter>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        <Sidebar></Sidebar>
    </div>
    )
}