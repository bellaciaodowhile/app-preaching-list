import { Button, Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { HiDotsVertical } from "react-icons/hi";
export const ListItem = ({ name, church }) => {
  return (
    <Card shadow='none' className='p-5 bg-indigo-800'>
        <CardBody className='flex flex-row justify-between'>
            <div>
                <div className="text-2xl font-semibold text-indigo-50">{name}</div>
                <div className="textl-md text-indigo-300">Iglesia {church}</div>
            </div>
            <Dropdown>
                <DropdownTrigger className='cursor-pointer '>
                    <Button isIconOnly variant='light'>
                        <HiDotsVertical className='size-6 text-indigo-200' />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Editar</DropdownItem>
                    <DropdownItem key="copy">Eliminar</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </CardBody>
    </Card>
  )
}