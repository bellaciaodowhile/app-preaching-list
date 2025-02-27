import { useEffect, useState } from "react";
import { FormStepsContext } from "./FormStepsContext"

export const FormStepsProvider = ({ children }) => {
    const [rangeDate, setRangeDate] = useState(false);
    const [SELECTED_DAYS, setSelectedDays] = useState([]);
    const [DAYS_BY_MONTH, setDaysByMonth] = useState(false);
    const [SELECTED_PREACHERS, setSelectedPreachers] = useState([]);
    const [steps, setSteps] = useState({step: 1, action: 'next'});
    const [CONTENT_PDF, setContentPdf] = useState({});
    const [seniors, setSeniors] = useState([]);
    const [preachers, setPreachers] = useState([]);
    const [isActiveInput, setIsActiveInput] = useState({});
    const [session, setSession] = useState(true)

    return (
        <FormStepsContext.Provider value={{ 
            rangeDate,
            setRangeDate,
            SELECTED_DAYS,
            setSelectedDays,
            DAYS_BY_MONTH,
            setDaysByMonth,
            SELECTED_PREACHERS,
            setSelectedPreachers,
            steps,
            setSteps,
            CONTENT_PDF,
            setContentPdf,
            seniors,
            setSeniors,
            preachers,
            setPreachers,
            isActiveInput,
            setIsActiveInput,
            session
        }}>
            { children }
        </FormStepsContext.Provider>
    )
}