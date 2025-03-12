import { Card } from "@heroui/react"
import { Link } from "react-router-dom"

export const CardDashboard = ({path, number, title}) => {
  return (
    <>
        <Link to={path}>
          <Card className="p-5 border border-indigo-200 shadow-none flex justify-center items-center hover:-translate-y-1 hover:shadow-xl cursor-pointer" >
            <span className="text-6xl font-bold text-indigo-950">{number}</span>
            <strong className="text-xl">{title}</strong>
          </Card>
        </Link> 
    </>
  )
}