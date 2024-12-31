import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { TypeAnimation } from 'react-type-animation';
import { ModalContext } from "../context/ModalContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
    
    const { onModal } = useContext(ModalContext);

    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>  
            <section id="hero" className="text-center text-balance flex flex-col items-center gap-10 relative">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        'En cualquier momento exporta',
                        2000,
                        'En cualquier momento publica',
                        2000,
                        'En cualquier momento comparte',
                        2000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    repeat={Infinity}
                    className="uppercase text-indigo-600 font-bold text-sm "
                />
                <h1 className="text-4xl md:text-6xl text-indigo-950 font-bold max-w-[800px] z-10">¡Organiza tus listas de predicación gratis!</h1>
                <p className="text-gray-400 text-lg max-w-[800px] z-10">Puedes acceder a tus listas de predicación desde cualquier dispositivo con conexión a Internet, lo que te permite realizar cambios y consultar información cuando quieras.</p>
                <div className="flex justify-center gap-6 z-10">
                    <Button
                    as={Link}
                    className="bg-indigo-600 text-white" 
                    radius="full" 
                    size="lg"
                    to={'/demo'}>
                        Probar ahora
                    </Button>
                    <Button 
                    className="border-indigo-600 text-indigo-600" 
                    radius="full"
                    variant="bordered"
                    size="lg"
                    onClick={() => { onModal('login') }}>
                        Iniciar sesión
                    </Button>
                </div>
                <img src="./public/hero.svg" className="z-10" alt="" />
                <div className="w-[10%] h-[10%] md:w-[200px] md:h-[200px] gradient"></div>
            </section>

        </motion.div>
    )
}
