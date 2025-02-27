import { useContext, useEffect } from "react";
import { FormStepsContext } from "../context/FormStepsContext";

export const useToggleVisibility = () => {

    const { setIsActiveInput, setSelectedPreachers, SELECTED_PREACHERS, isActiveInput } = useContext(FormStepsContext);
    const toggleVisibility = (date) => {
        setIsActiveInput(prevState => ({
            ...prevState,
            [date]: !prevState[date]
        }));
        setSelectedPreachers(prevState => ({
            ...prevState,
            [date]: {
                ...prevState[date],
                // preacher: (isActiveInput[date] && []) || prevState[date]?.preacher
            }
        }))
    }

    console.log('useToggleVisibility')

    return { toggleVisibility }
}
