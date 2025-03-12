import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@heroui/react";
import { FormStepsContext } from "../context/FormStepsContext";
import { useContext } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { HiHome, HiUserGroup, HiHeart, HiClipboardList  } from "react-icons/hi";



export const Sidebar = () => {

    const { session } = useContext(FormStepsContext);

    const sidebarLinks = [
        {
            path: '/dashboard',
            icon: <HiHome className="size-6"/>,
            label: 'Dashboard'
        },
        {
            path: '/predicadores',
            icon: <HiUserGroup   className="size-6"/>,
            label: 'Predicadores'
        },
        {
            path: '/ancianos',
            icon: <HiHeart  className="size-6"/>,
            label: 'Ancianos'
        },
        {
            path: '/listas-de-predicacion',
            icon: <HiClipboardList className="size-6"/>,
            label: 'Listas de predicación'
        },
        {
            path: '#',
            icon: '',
            label: 'Cerrar sesión'
        }
    ];

    const location = useLocation();
    return (
        <>
        {
            session && (
                <Card className="max-w-[300px] w-[300px] absolute z-10 rounded-xl mt-10 shadow-none bg-[#DFEEFE]">

                <img src="./public/moises.svg" alt="" />
                <CardHeader className="p px-4 flex flex-col items-center text-indigo-950">
                    <span className="px-4 text-4xl font-semibold">Bienvenido</span>
                    <span className="px-4 text-xl">Nombre Apellido</span>
                </CardHeader>
                <CardBody className="px-7 mt-5">
                    <ul className="gap-3 flex flex-col">
                        {
                            sidebarLinks.map(link => (
                                <li>
                                    {
                                        link.label != 'Cerrar sesión' ? (
                                            <LinkRouter 
                                                to={link.path}
                                                className={`w-full flex p-4 hover:bg-white rounded-md transition-all text-indigo-900 font-semibold items-center gap-3 ${link.label == 'Cerrar sesión' && ''}
                                                ${location.pathname == link.path && 'bg-white'}`}
                                                >
                                                    {link.icon}<span>{link.label}</span>
                                            </LinkRouter>
                                        ) : (
                                            <Button className="justify-center rounded-md bg-red-500 text-white mt-10 hover:bg-red-400 w-full flex p-7 text-md">
                                                { link.label }
                                            </Button>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </CardBody>
                <CardFooter>
                
                </CardFooter>
                </Card> 
            )
        }  
        </>
    )
}