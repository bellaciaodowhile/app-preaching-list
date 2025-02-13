import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext"
import { Step } from "./Step";
import { RangeCalendar } from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";

export const RangeSelection = () => {

    const { rangeDate, setRangeDate } = useContext(FormStepsContext);

    return (
        <Step
        key={`step-${1}`}
        step={1}
        label="Selecciona el rango de fecha:">
            <div className="flex justify-center">
                <I18nProvider locale="es-ES"> 
                    <RangeCalendar 
                    color={'primary'}
                    aria-label="Fecha (Sin elección)"
                    onChange={setRangeDate}
                    value={rangeDate} 
                    visibleMonths={3}/>
                </I18nProvider>
            </div>
        </Step>
    )
}