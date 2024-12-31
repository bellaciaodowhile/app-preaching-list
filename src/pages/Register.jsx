import {Form, Input, Button} from "@nextui-org/react";

export const Register = ({ onTest }) => {

    const onSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>

<h1>Register</h1>
<p className="text-5xl text-blue-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea accusamus voluptatum. Facere ex, ad, illum ab blanditiis, maiores minima quam nam porro molestiae assumenda sunt mollitia cupiditate similique molestias!</p>
            {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-3xl text-indigo-950 font-bold">¡Regístrate gratis!</h1>
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
                        />


                        <Button type="submit" radius="full" className="mt-5 bg-indigo-600 text-white">
                            Registrar
                        </Button>
                    </Form>
                </div>
                <img src="./public/register.jpg" alt="" className="rounded-xl"/>
            </section> */}



            





        </>
    )
}
