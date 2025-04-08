import { Button, Input, Form, Card, CardBody, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { ContainerDashboard } from './ContainerDashboard'
import { ModalContext } from '../context/ModalContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForms } from '../hooks/useForms';
import { ListSearch } from './Lists/ListSearch';
import { FormStepsContext } from '../context/FormStepsContext';
import { toast } from "sonner";
import axios from 'axios';

export const Preachers = () => {
    const formRef = useRef(null);
    const { onModal } = useContext(ModalContext);
    const { preachersDB, setPreachersDB } = useContext(FormStepsContext)
    const { onSubmit, submitted, setSubmitted } = useForms();
    const [form, setForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const closeForm = () => {
        setForm(!form);
        setSubmitted(null);
        formRef.current.reset();
    }

    const handleAddPreacher = (e) => {
        e.preventDefault();
        // alert('Hello!')

        const data = Object.fromEntries(new FormData(e.currentTarget));
        if (data.name === '' || data.lastname === '' || data.church === '') {
            return toast.error('Los campos: Nombre, Apellido e Iglesia son obligatorios.')
        }

        try {
            axios.post('http://localhost:5100/preachers/create', data)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error('There was an error sending the mail!', error);
            });
        } catch (error) {
            console.log(error)
        }
        console.log(data)
    }

    const fetchPreachers = async () => {
        try {
            const res = await axios.get('http://localhost:5100/preachers/');
            setPreachersDB(res.data.data);
            setIsLoading(false)
        } catch (error) {
            console.error('Error get-preachers', error);
        }
    };

    useEffect(() => {
        fetchPreachers();
    }, []);

    return (
        <>
           <ContainerDashboard>
            <h1 className='text-3xl text-indigo-950 font-semibold mb-3'>Predicadores</h1>
            <Button className='text-white font-semibold uppercase bg-indigo-950' onPress={closeForm}>
                {form ? 'Agregando' : 'Agregar'} predicador
            </Button>

            <Form 
            className={`border-3 border-dashed border-indigo-500 p-5 rounded-md my-10 ${ form ? 'flex animate__fadeIn' : `hidden`  } animate__animated`}
            onSubmit={handleAddPreacher}
            ref={formRef}
            >
                <h4 className='text-xl font-semibold'>Registro de predicadores</h4>
                <Input
                    isRequired
                    errorMessage=""
                    label="Nombre"
                    name="name"
                    placeholder="Nombre del predicador"
                    type="text"
                    className='mt-2'
                />
                <Input
                    isRequired
                    errorMessage=""
                    label="Apellido"
                    name="lastname"
                    placeholder="Apellido del predicador"
                    type="text"
                    className='mt-2'
                />
                <Input
                    isRequired
                    errorMessage=""
                    label="Iglesia"
                    name="church"
                    placeholder="Iglesia"
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
            {isLoading ? ( // Conditional rendering based on loading state
                <p>Loading...</p> // Show loading message while fetching data
            ) : (
                <ListSearch items={preachersDB} section="preacher" /> // Render ListSearch after loading is complete
            )}
           </ContainerDashboard>
        </>
    )
}