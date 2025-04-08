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
import { FormPreacher } from "../components/Forms/FormPreacher";


export const ModalProvider = ({ children }) => {

    const [modalCurrent, setModalCurrent] = useState('');

    const onModal = (current) => {
        setModalCurrent(current);
        onOpen();
        console.log('On Modal: ' + current);
    }

    const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>
            <ModalContext.Provider value={{ onModal, onClose }}>
                { children }
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="px-5">
                {(onClose) => {
                    let modalBody, modalTitle;

                    switch (modalCurrent) {
                        case 'register':
                            modalTitle = '¡Registrate grátis!'
                            modalBody = (
                                <>
                                    <RegisterUser></RegisterUser>
                                </>
                            );
                            break;
                        case 'login':
                            modalTitle = 'Inicia sesión'
                            modalBody = (
                                <>
                                    <Login />
                                </>
                            );
                            break;
                        case 'preacher':
                            modalTitle = 'Agregando predicador'
                            modalBody = (
                                <>
                                    <FormPreacher />
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
                                { modalTitle }
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