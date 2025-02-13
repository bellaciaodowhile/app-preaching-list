import { DrawerContainer } from '../components/DrawerContainer';
import { DrawerContext } from './DrawerContext';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";


export const DrawerProvider = ({ children }) => {

    const onDrawerOpen = () => { 
        onOpen();
        console.log('Esto es simple')
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <DrawerContext.Provider value={{ onDrawerOpen }}>
            { children }
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="full">
                <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerContainer/>
                    </>
                )}
                </DrawerContent>
            </Drawer>
        </DrawerContext.Provider>
    )
}