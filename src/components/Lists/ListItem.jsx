import { Button, Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { HiDotsVertical } from "react-icons/hi";
export const ListItem = ({ name, church, phone = '', section }) => {
  return (
    <Card shadow='none' className='p-5 bg-indigo-800'>
        <CardBody className='flex flex-row justify-between'>
            <div>
                <div className="text-2xl font-semibold text-indigo-50">{name}</div>
                <div className="text-xl text-indigo-300">
                    { church ? (`Iglesia ${church}`) : (`${phone}`) }
                </div>
                {(section == 'preacher' && phone) && (<span className='text-indigo-200 font-semibold mt-3 inline-block'>{phone}</span>)}
            </div>
                    
            <Dropdown>
                <DropdownTrigger className='cursor-pointer '>
                    <Button isIconOnly variant='light'>
                        <HiDotsVertical className='size-6 text-indigo-200' />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Editar</DropdownItem>
                    {phone && (<DropdownItem key="send_whatsapp">Enviar WhatsApp</DropdownItem> )}
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Eliminar
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </CardBody>
    </Card>
  )
}