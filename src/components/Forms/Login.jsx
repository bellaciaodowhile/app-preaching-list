import {
    Button,
    Form, 
    Input
} from "@heroui/react";
import { useContext, useState } from "react";
import { EyeSlashFilledIcon, EyeFilledIcon } from "../IconsEyes";
import { useForm } from "../../hooks/useForm";
import axios from 'axios';
import { FormStepsContext } from "../../context/FormStepsContext";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";

export const Login = () => {

    const navigate = useNavigate();

    const { setSession} = useContext(FormStepsContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { onInputChange, formState, setFormState } = useForm({})
    const { onClose } = useContext( ModalContext );
    
    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState)

        setIsLoading(true)

        try {
            axios.post('http://localhost:5100/users/login', formState)
            .then(response => {
                console.log(response.data);
                if (response.data.status) {
                    onClose()
                    alert(response.data.message)
                    navigate('/dashboard')
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
                        return "Por favor introduza su correo";
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
                <Button type="submit" isLoading={isLoading} radius="full" fullWidth size="lg" className="my-5 bg-indigo-600 text-white">
                    Inicia sesión
                </Button>
            </Form>
        </>
    )
}