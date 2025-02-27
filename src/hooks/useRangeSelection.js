import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { toast } from "sonner";
import { DAYS } from "../helpers/days";
import { MONTHS } from "../helpers/months";


const useRangeSelection = () => {
    const {
        rangeDate,
        SELECTED_DAYS,
        SELECTED_PREACHERS,
        setDaysByMonth,
    } = useContext(FormStepsContext);

    const handleRangeSelection = () => {
        console.log('handleRangeSelection');
        console.log('%c Step 2: Array de predicadores seleccionados', 'color: white; padding: 5px; background: #4635B1')
        console.log(SELECTED_PREACHERS)
        const start = new Date(`${rangeDate?.start.year}-${rangeDate?.start.month}-${rangeDate?.start.day}`);
        const end = new Date(`${rangeDate?.end.year}-${rangeDate?.end.month}-${rangeDate?.end.day}`);
        const daysByMonth = {};
        const differenceInMilliseconds = end - start;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    
        let weekIndex = 0;
        let lastWeekNumber = null;
    
        for (let index = 0; index <= differenceInDays; index++) {
            const currentDate = new Date(start);
            currentDate.setDate(start.getDate() + index);
    
            const dayName = DAYS[currentDate.getDay()];
            const month = MONTHS[currentDate.getMonth()];
            if (SELECTED_DAYS.includes(dayName)) {
                const dayOfMonth = currentDate.getDate();
                const weekNumber = Math.ceil(dayOfMonth / 7);
                
                if (weekNumber !== lastWeekNumber) {
                    weekIndex++;
                    lastWeekNumber = weekNumber;
                }
    
                if (!daysByMonth[month]) {
                    daysByMonth[month] = [];
                }
                daysByMonth[month].push({
                    date: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`,
                    text: `${dayName} ${currentDate.getDate()} de ${month}`,
                    week: {
                        index: (weekIndex - 1),
                        number: weekNumber
                    }
                });
            }
        }
        if (SELECTED_DAYS.length === 0) {
            toast.error('Seleccione los días que desea dentro del rango de fecha para continuar')
            return false;
        }
        setDaysByMonth(daysByMonth)
        console.log(daysByMonth)
        return true;
    }

    return { handleRangeSelection }
}

export default useRangeSelection;