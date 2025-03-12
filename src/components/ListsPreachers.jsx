import { Button } from "@heroui/react"
import { ContainerDashboard } from "./ContainerDashboard"
import { FormStepsContext } from "../context/FormStepsContext"
import { useContext } from "react"
import { ListSearch } from "./Lists/ListSearch"


export const ListsPreachers = () => {
  const { listsPreachersDB } = useContext(FormStepsContext);

  return (
    <>
        <ContainerDashboard>
            <h1 className='text-3xl text-indigo-950 font-semibold mb-3'>Listas de predicacion</h1>
            <Button className='text-white font-semibold uppercase bg-indigo-950'>
                Crear lista
            </Button>
            <ListSearch items={listsPreachersDB} section="lists-preacher"/>
        </ContainerDashboard>
    </>
  )
}