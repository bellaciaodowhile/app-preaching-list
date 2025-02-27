import { Button, Input, Card, CardBody, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { ContainerDashboard } from './ContainerDashboard'
import { HiOutlineSearch, HiDotsVertical } from "react-icons/hi";
import { ListItem } from './ListItem';

export const Preachers = () => {
    return (
        <>
           <ContainerDashboard>
            <h1 className='text-3xl text-indigo-950 font-semibold mb-3'>Predicadores</h1>
            <Button className='text-white font-semibold uppercase bg-indigo-950'>
                Agregar predicador
                <i className=''></i>
            </Button>
            <Input
            placeholder="Busca los predicadores aquí"
            className='mt-5 border border-indigo-500 input-search bg-white'
            size='lg'
            variant='bordered'
            radius='none'
            startContent={ <HiOutlineSearch  /> }
            type="search"/>


            <div className="mt-10 gap-5 flex flex-col">
                <ListItem name="Nombre Apellido" church={'Sabanita'} />
                <ListItem name="Nombre Apellido" church={'Los Proceres'} />
                <ListItem name="Nombre Apellido" church={'Las Moreas'} />
                <ListItem name="Nombre Apellido" church={'Metropolitana'} />
                <ListItem name="Nombre Apellido" church={'El Cambao'} />
                <div className="m-auto flex justify-center mt-10">
                    <Pagination initialPage={1} total={10} />
                </div>
            </div>
           
           </ContainerDashboard>
        </>
    )
}