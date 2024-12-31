import {
    Button,
    Form, 
    Input
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useForm } from "../../hooks/useForm";
import { EyeSlashFilledIcon, EyeFilledIcon } from "../IconsEyes";
import { supabase } from "../../supabase/supabase.config";



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

        const { data: resEmail, error: errEmail } = await supabase
        .from('persons')
        .select()
        .eq('email', formState.email)

        if (resEmail.length > 0) return alert('Este correo ya está registrado');
        if (errEmail) return alert('Ha ocurrido un error...');
        
        try {
            const { data, errSignup } = await supabase.auth.signUp({
                email: formState.email,
                password: formState.pass,
            });

            if (data?.user) {
                const { data: res, error } = await supabase
                    .from('persons')
                    .insert({ 
                        name: formState.name,
                        lastname: formState.lastname,
                        email: formState.email,
                    })
                if (error) alert('Ha ocurrido un error al registrar usuario...');
            }

            console.log(data);
            console.log(errSignup) // 400 Email address "test@mail.com" is invalid
            if (data?.user) {
                setIsLoading(false);
                onModal('login');
            }
            if (errSignup) alert('Ha ocurrido un error al registrar correo...');
        } catch (err) {
            console.log(err)
        }

        
    };


    return (
        <>
            <Form validationBehavior="native" onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">
                <Input
                    isRequired
                    errorMessage={({validationDetails}) => {
                    if (validationDetails.valueMissing) {
                        return "Por favor introduza su nombre";
                    }
                    }}
                    label="Nombre"
                    name="name"
                    type="text"
                    onChange={onInputChange}
                />
                <Input
                    isRequired
                    errorMessage={({validationDetails}) => {
                    if (validationDetails.valueMissing) {
                        return "Por favor introduza su apellido";
                    }
                    }}
                    label="Apellido"
                    name="lastname"
                    type="text"
                    onChange={onInputChange}
                />
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