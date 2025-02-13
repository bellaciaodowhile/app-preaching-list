import { CheckboxGroup, cn } from "@heroui/react";
import { FormStepsContext } from "../context/FormStepsContext"
import { CustomCheckbox } from "./CustomCheckbox";
import { Step } from "./Step";
import { DAYS } from "../helpers/days";
import { useContext } from "react";

export const DaysSelection = () => {

    const { SELECTED_DAYS, setSelectedDays } = useContext(FormStepsContext);

    return (
        <Step
        key={`step-${2}`}
        step={2} 
        label="Seleccione los días del rango de fecha:">
            <div className="flex justify-center max-w-[600px] m-auto">
                <CheckboxGroup
                    classNames={{
                        base: cn("flex flex-col justify-center"),
                        wrapper: cn("flex flex-col justify-center"),
                    }}
                    value={SELECTED_DAYS}
                    onChange={setSelectedDays} 
                    orientation="horizontal">
                    {
                        DAYS.map((day, index) => (
                            <CustomCheckbox
                            key={`day-${index}`}
                            title={day}
                            value={day}/>
                        ))
                    }
                </CheckboxGroup>
            </div>
        </Step>
    )
}