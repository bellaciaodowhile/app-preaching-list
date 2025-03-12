import { useContext, useEffect, useState } from "react"
import { ContainerDashboard } from "../components/ContainerDashboard"
import { FormStepsContext } from "../context/FormStepsContext"
import { verseBibleRandom } from "../helpers/verseBibleRandom"
import { Card, CardBody } from "@heroui/react"
import { HiOutlineRefresh } from "react-icons/hi";
import { Link } from "react-router-dom"
import { CardDashboard } from "../components/CardDashboard"


export const Dashboard = () => {
  const { preachersDB, seniorsDB, listsPreachersDB } = useContext(FormStepsContext)
  const [cite, setCite] = useState(null)
  const citeRandom = async () => {
    try {
      const books = await fetch('https://bible-api.deno.dev/api/books').then((response) => response.json());
      const randomBook = books[Math.floor(Math.random() * books.length)];
      const chapter = await fetch(`https://bible-api.deno.dev/api/read/rv1960/${randomBook.abrev}/${Math.floor(Math.random() * randomBook.chapters)}`).then((response) => response.json());
      const verse = await chapter.vers[Math.floor(Math.random() * chapter?.vers?.length)];
      setCite({
          verse,
          cite: `${chapter.name} ${chapter.chapter}:${verse.number}` 
      })
    } catch (error) {
      console.log(Error)
    }   
  }
  useEffect(() => {
    citeRandom();
  }, []); 
  
  return (
    <div>
      <ContainerDashboard>
      <h1 className='text-3xl text-indigo-950 font-semibold mb-3'>Dashboard</h1>

      <div className="grid grid-cols-3 mt-5 gap-5">
        <CardDashboard path={'/predicadores'} title="Predicadores" number={preachersDB.length} />
        <CardDashboard path={'/ancianos'} title="Ancianos" number={seniorsDB.length} />
        <CardDashboard path={'/listas-de-predicacion'} title="Listas" number={listsPreachersDB.length} />
      </div>


      <Card className="border text-indigo-900 text-center mt-5">
        {/* <Button isIconOnly onPress={citeRandom} className="mb-3">
          <HiOutlineRefresh />
        </Button> */}
        <CardBody className="px-10 py-12 text-center">
        {
          cite ? (
            <>
              <span className="text-2xl">"{cite.verse.verse}"</span>
              <span className="mt-3 text-3xl">{cite.cite}</span>
            </>
          ) : "Cargando versículo..."
        }
        </CardBody>
        
       {/* <img src="./public/dashboard.webp" alt="" /> */}
      </Card>

      

      </ContainerDashboard>
    </div>
  )
}