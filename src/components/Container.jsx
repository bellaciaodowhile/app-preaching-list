import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext"

export const Container = ({ children }) => {

    const { session } = useContext(FormStepsContext);
    return (
        <div className={`px-5 py-10 max-w-[1024px] m-auto relative ${session && `pl-[300px]`}`}>
            { children }
        </div>
    )
}
