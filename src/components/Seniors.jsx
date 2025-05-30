import { Button, Input, Form } from '@heroui/react'
import { ContainerDashboard } from './ContainerDashboard'
import { ModalContext } from '../context/ModalContext';
import { useContext, useRef, useState } from 'react';
import { useForms } from '../hooks/useForms';
import { ListSearch } from './Lists/ListSearch';
import { FormStepsContext } from '../context/FormStepsContext';

export const Seniors = () => {
    const formRef = useRef(null);
    const { onModal } = useContext(ModalContext);
    const { seniorsDB, setSeniorsDB } = useContext(FormStepsContext)
    const { onSubmit, submitted, setSubmitted } = useForms();
    const [form, setForm] = useState(false);
    const closeForm = () => {
        setForm(!form);
        setSubmitted(null);
        formRef.current.reset();
    }

    return (
        <>
           <ContainerDashboard>
            <h1 className='text-3xl text-indigo-950 font-semibold mb-3'>Ancianos</h1>
            <Button className='text-white font-semibold uppercase bg-indigo-950' onPress={closeForm}>
                {form ? 'Agregando' : 'Agregar'} anciano
            </Button>

            <Form 
            className={`border-3 border-dashed border-indigo-500 p-5 rounded-md my-10 ${ form ? 'flex animate__fadeIn' : `hidden`  } animate__animated`}
            onSubmit={onSubmit}
            ref={formRef}
            >
                <h4 className='text-xl font-semibold'>Registro de ancianos</h4>
                <Input
                    isRequired
                    errorMessage=""
                    label="Nombre"
                    name="name"
                    placeholder="Nombre del anciano"
                    type="text"
                    className='mt-2'
                />
                <Input
                    isRequired
                    errorMessage=""
                    label="Apellido"
                    name="lastname"
                    placeholder="Apellido del anciano"
                    type="text"
                    className='mt-2'
                />
                <Input
                    label="Número celular"
                    name="phone"
                    placeholder="04121234123"
                    type="text"
                    className='mt-2'
                />
                <div className="flex mt-5 gap-3 w-full">
                    <Button 
                    type="submit" 
                    className='text-white font-semibold py-6 text-xl w-full bg-green-500'>Registrar</Button>
                    <Button 
                    type="button" 
                    className='text-white font-semibold py-6 text-xl w-full bg-red-500' 
                    onPress={closeForm}>Cerrar</Button>
                </div>
                {submitted && (
                    <div className="text-small text-default-500">
                    Has enviado: <code>{JSON.stringify(submitted)}</code>
                    </div>
                )}
            </Form>
            <ListSearch items={seniorsDB} section="seniors"/>
           </ContainerDashboard>
        </>
    )
}