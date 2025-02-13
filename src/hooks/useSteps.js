import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import useRangeSelection from "./useRangeSelection";
import useValidateSelectionPreachers from "./useValidateSelectionPreachers";
import { toast } from "sonner";

const useSteps = () => {
    const { handleRangeSelection } = useRangeSelection();
    const { validateSelectionPreachers } = useValidateSelectionPreachers();   
    const { setSteps, steps, rangeDate } = useContext(FormStepsContext);

    const handleSteps = (step, action) => {
        setSteps({step, action});
    }

    const handleStepNext = () => {
        switch (steps.step) {
            case 1:
                if (!rangeDate) return toast.error('Seleccione un rango de fecha para continuar')
                break;
            case 2:
                if (!handleRangeSelection()) return;
                break;
            case 3:
                if (!validateSelectionPreachers()) return;
            case 4:
                console.log('Step switch 4')
                // if (SELECTED_PREACHERS.length === 0) return toast.error('Debe añadir los predicadores a las fechas correspondientes para continuar')
                break;
        
            default:
                break;
        }
        handleSteps(steps.step + 1, 'next')
    }

    return { handleStepNext, handleSteps }
}

export default useSteps;