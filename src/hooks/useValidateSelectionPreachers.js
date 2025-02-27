import { useContext } from "react";
import { toast } from "sonner";
import { FormStepsContext } from "../context/FormStepsContext";
import { borderAlert } from "../helpers/borderAlert";



const useValidateSelectionPreachers = () => {

    const { SELECTED_PREACHERS, DAYS_BY_MONTH, isActiveInput } = useContext(FormStepsContext);

    const lengthDaysByMonth = () => {
        const arrLength = [];
        for (const month in DAYS_BY_MONTH) {
            DAYS_BY_MONTH[month].map(day => {
                arrLength.push(day)
            })
        }
        return arrLength.length;
    }

    const validateSelectionPreachers = () => {
        const lengthSelectedPreachers = Object.keys(SELECTED_PREACHERS).length;
        const lengthDaysTotal = lengthDaysByMonth()
        if (lengthSelectedPreachers === 0) {
            toast.error('Debe añadir los predicadores a las fechas correspondientes para continuar')
            return false;
        }
        for (const dateSelected in SELECTED_PREACHERS) {
            console.log(isNaN(SELECTED_PREACHERS[dateSelected].preacher))
            if (SELECTED_PREACHERS[dateSelected].preacher == '') {
                const cardDate = document.querySelector(`[data-date="${dateSelected}"]`)
                borderAlert(cardDate, 'border-danger');
                toast.error(`Debe seleccionar un predicador para la fecha ${dateSelected}, no se puede dejar en blanco ni repetir un predicador en el mismo mes`)
                return false;
            }
            if (!isNaN(SELECTED_PREACHERS[dateSelected].preacher) && isActiveInput[dateSelected]) {
                toast.error(`Debe seleccionar un predicador para la fecha ${dateSelected}`)
                return false;
            }
            if (isNaN(SELECTED_PREACHERS[dateSelected].preacher) && !isActiveInput[dateSelected]) {
                toast.error(`Debe seleccionar un predicador para la fecha ${dateSelected}`)
                return false;
            }
        }
        if (lengthSelectedPreachers !== lengthDaysTotal) {
            toast.error('Debe añadir los predicadores a las fechas correspondientes para continuar')
            return false;
        }
        return true;
    }
    return { validateSelectionPreachers }
}
export default useValidateSelectionPreachers;