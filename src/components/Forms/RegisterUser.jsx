import {
    Button,
    Form, 
    Input
} from "@heroui/react";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useForm } from "../../hooks/useForm";
import { EyeSlashFilledIcon, EyeFilledIcon } from "../IconsEyes";
import axios from 'axios';



export const RegisterUser = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { onModal } = useContext( ModalContext );
    const { onInputChange, formState, setFormState } = useForm({})
    
    const toggleVisibility = () => setIsVisible(!isVisible);

    const validationPassword = () => {
        if (formState.pass !== formState.repeatPass) {
            return true;
        }
        return null;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            axios.post('http://localhost:5100/users/create', formState)
            .then(response => {
                console.log(response.data);
                if (response.data.status) {
                    onModal('login')
                    alert(response.data.message)
                } else {
                    alert(response.data.message)
                }
                setIsLoading(false)
            })
            .catch(error => {
                console.error('There was an error sending the mail!', error);
            });
        } catch (error) {
            console.log('Error Login: ' + error)
        }
        
    };


    return (
        <>
            <Form validationBehavior="native" onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">
                <Input
                    isRequired
                    errorMessage={({validationDetails}) => {
                    if (validationDetails.valueMissing) {
                        return "Por favor introduza su correo electrónico";
                    }
                    }}
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    onChange={onInputChange}
                />

                <Input
                    endContent={
                        <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        >
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    isRequired
                    errorMessage={({validationDetails}) => {
                    if (validationDetails.valueMissing) {
                        return "Por favor introduza su contraseña";
                    }
                    }}
                    label="Contraseña"
                    name="pass"
                    onChange={onInputChange}
                />
                <Input
                    endContent={
                        <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        >
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    isRequired
                    isInvalid={validationPassword()}
                    errorMessage={({validationDetails}) => {
                        if (validationDetails.valueMissing) {
                            return "Por favor verifique su contraseña";
                        }
                    }}
                    label="Repetir contraseña"
                    name="repeatPass"
                    onChange={onInputChange}
                />
                <Button isLoading={isLoading} type="submit" radius="full" fullWidth size="lg" className="my-5 bg-indigo-600 text-white">
                    Registrar
                </Button>
            </Form>
        </>
    )
}