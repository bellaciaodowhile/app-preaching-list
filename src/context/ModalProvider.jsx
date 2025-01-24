import { useState } from "react";
import { ModalContext } from "./ModalContext"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure
} from "@heroui/react";

import { RegisterUser } from "../components/Forms/RegisterUser";
import { Login } from "../components/Forms/Login";


export const ModalProvider = ({ children }) => {

    const [modalCurrent, setModalCurrent] = useState('');

    const onModal = (current) => {
        setModalCurrent(current);
        onOpen();
        console.log('On Modal: ' + current);
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <>
            <ModalContext.Provider value={{ onModal, test: 'hola' }}>
                { children }
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="px-5">
                {(onClose) => {
                    let modalBody;

                    switch (modalCurrent) {
                        case 'register':
                            modalBody = (
                                <>
                                    <RegisterUser></RegisterUser>
                                </>
                            );
                            break;
                        case 'login':
                            modalBody = (
                                <>
                                    <Login />
                                </>
                            );
                            break;
                        default:
                            modalBody = (
                                <div>Default</div>
                            );
                    }

                    return (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                {modalCurrent === 'register' ? '¡Regístrate gratis!' : 'Iniciar sesión'}
                            </ModalHeader>
                            <ModalBody>
                                {modalBody}
                            </ModalBody>
                        </>
                    );
                }}
                </ModalContent>
                </Modal>
            </ModalContext.Provider>
        </>
    )
}