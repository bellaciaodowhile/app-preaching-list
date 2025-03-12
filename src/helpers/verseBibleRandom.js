import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext";

export const verseBibleRandom  = async () => {

    const { setBibleCite } = useContext(FormStepsContext); 

    try {
        const books = await fetch('https://bible-api.deno.dev/api/books').then((response) => response.json());
        const randomBook = books[Math.floor(Math.random() * books.length)];
        const chapter = await fetch(`https://bible-api.deno.dev/api/read/rv1960/${randomBook.abrev}/${Math.floor(Math.random() * randomBook.chapters)}`).then((response) => response.json());
        const verse = await chapter.vers[Math.floor(Math.random() * chapter?.vers?.length)];
        // console.log(verse)
        setBibleCite({
            verse,
            cite: `${chapter.name} ${chapter.chapter}:${verse.number}` 
        })
    } catch (error) {
        console.log(error)
    }
    
}
