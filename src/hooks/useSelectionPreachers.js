import { useContext, useEffect } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { toast } from "sonner";
import { borderAlert } from "../helpers/borderAlert";
import { MONTHS } from "../helpers/months";

const useSelectionPreachers = () => {

    const {
        SELECTED_PREACHERS,
        setSelectedPreachers,
        preachers,
    } = useContext(FormStepsContext);

    useEffect(() => {
        setSelectedPreachers(SELECTED_PREACHERS)
    }, [setSelectedPreachers, SELECTED_PREACHERS]);

    const handleSelectionPreachers = (date, preacher) => {
        const monthCurrent = date.split('-')[1];
        const cardDateCurrent = document.querySelector(`[data-date="${ date }"]`);
        const seniorKeyCurrent = cardDateCurrent.attributes['data-senior'].textContent;
        const weekIndex = cardDateCurrent.attributes['data-week'].textContent;
        console.log('%c Senior Key Current', 'padding: 10px; background: red;')
        console.log(seniorKeyCurrent)

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
                    return toast.error(`${preachers[preacher.target.value - 1].label} ya se ha elegido para el mes de ${ MONTHS[month - 1] }`)
                } 
            }
        }
        setSelectedPreachers(prevState => ({
            ...prevState,
            [date]: {
                preacher: preacher.target.value,
                week: weekIndex,
                senior: seniorKeyCurrent
            }
        }));
    }
    return { handleSelectionPreachers }
}
export default useSelectionPreachers;