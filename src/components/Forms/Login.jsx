import {
    Button,
    Form, 
    Input
} from "@heroui/react";

export const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault();
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
                    name="email_"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage={({validationDetails}) => {
                    if (validationDetails.valueMissing) {
                        return "Por favor introduzca su contraseña";
                    }
                    }}
                    label="Contraseña"
                    name="pass"
                    type="password"
                />
                <Button type="submit" radius="full" fullWidth size="lg" className="my-5 bg-indigo-600 text-white">
                    Inicia sesión
                </Button>
            </Form>
        </>
    )
}