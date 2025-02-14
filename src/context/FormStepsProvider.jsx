import { useState } from "react";
import { FormStepsContext } from "./FormStepsContext"

export const FormStepsProvider = ({ children }) => {
    const [rangeDate, setRangeDate] = useState(false);
    const [SELECTED_DAYS, setSelectedDays] = useState([]);
    const [DAYS_BY_MONTH, setDaysByMonth] = useState(false);
    const [SELECTED_PREACHERS, setSelectedPreachers] = useState([]);
    const [steps, setSteps] = useState({step: 1, action: 'next'});
    const [dataPdf, setDataPdf] = useState({});
    const [seniors, setSeniors] = useState([]);
    const [preachers, setPreachers] = useState([]);

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
            dataPdf,
            setDataPdf,
            seniors,
            setSeniors,
            preachers,
            setPreachers
        }}>
            { children }
        </FormStepsContext.Provider>
    )
}