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
    const [session, setSession] = useState(false)
    const [bibleCite, setBibleCite] = useState({});
    const [preachersDB, setPreachersDB] = useState([
        {
            name: 'Nombre Apellido',
            church: 'Sabanita',
        },
        {
            name: 'Korh Ramirez',
            church: 'Próceres',
            phone: '0412-00012367'
        },
        {
            name: 'Kaht Uuska',
            church: 'Moreas',
            phone: '0412-00012367'
        },
        {
            name: 'Joajs Kidash',
            church: 'Perú',
            phone: '0412-00012367'
        },
        {
            name: 'Konrrat Maosn',
            church: 'Metropolitana',
            phone: '0412-00012367'
        },
        {
            name: 'Kados Rmaos',
            church: 'Central',
            phone: '0412-00012367'
        },
        {
            name: 'Lalala Lala',
            church: 'llano alto',
            phone: '0412-00012367'
        },
    ]);
    const [seniorsDB, setSeniorsDB] = useState([
        {
            name: 'Aciano One',
            phone: '0412-00012367'
        },
        {
            name: 'Ancia Losvko',
        },
        {
            name: 'Kaht Uuska',
            phone: '0412-00012367'
        },
        {
            name: 'Joajs Kidash',
            phone: '0412-00012367'
        },
        {
            name: 'Konrrat Maosn',
            phone: '0412-00012367'
        },
        {
            name: 'Kados Rmaos',
            phone: '0412-00012367'
        },
        {
            name: 'Lalala Lala',
            phone: '0412-00012367'
        },
    ]);
    const [listsPreachersDB, setListsPreachersDB] = useState([
        {
            name: 'Enero - Marzo 2025',
        },
        {
            name: 'Abril - Junio 2025',
        },
    ]);

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
            session,
            preachersDB,
            setPreachersDB,
            seniorsDB,
            setSeniorsDB,
            bibleCite,
            setBibleCite,
            listsPreachersDB,
            setListsPreachersDB
        }}>
            { children }
        </FormStepsContext.Provider>
    )
}