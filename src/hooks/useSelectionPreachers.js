import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { toast } from "sonner";
import { borderAlert } from "../helpers/borderAlert";
import { MONTHS } from "../helpers/months";

const useSelectionPreachers = () => {

    const {
        SELECTED_PREACHERS,
        setSelectedPreachers,
        PREACHERS_INIT
    } = useContext(FormStepsContext);

    const handleSelectionPreachers = (date, preacher) => {
        const monthCurrent = date.split('-')[1];
        const cardDateCurrent = document.querySelector(`[data-date="${ date }"]`);
        const seniorKeyCurrent = cardDateCurrent.attributes['data-senior'].textContent;
    
        for (const dateSelected in SELECTED_PREACHERS) {
            const [day, month, year] = dateSelected.split('-');
            if (SELECTED_PREACHERS[dateSelected].preacher === preacher.target.value && month == monthCurrent) {
                if (SELECTED_PREACHERS[dateSelected].preacher !== '') {
                    const cardDate = document.querySelector(`[data-date="${dateSelected}"]`)
                    borderAlert(cardDate, 'border-info');
                    setSelectedPreachers(prevState => ({
                        ...prevState,
                        [date]: {
                            preacher: '',
                        }
                    }));
                    return toast.error(`${PREACHERS_INIT[preacher.target.value - 1].label} ya se ha elegido para el mes de ${ MONTHS[month - 1] }`)
                } 
            }
        }
        setSelectedPreachers(prevState => ({
            ...prevState,
            [date]: {
                preacher: preacher.target.value,
                senior: seniorKeyCurrent
            }
            
        }));
    }
    return { handleSelectionPreachers }
}
export default useSelectionPreachers;