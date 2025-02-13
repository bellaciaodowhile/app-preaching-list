import { useContext } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { Step } from "./Step";
import { Seniors } from "./Seniors";
import { PREACHERS_INIT } from "../helpers/preachers";
import useSelectionPreachers from "../hooks/useSelectionPreachers";
import { Card, Select, SelectItem } from "@heroui/react";


export const PreachersSelection = () => {

    const { DAYS_BY_MONTH, seniors, SELECTED_PREACHERS, SELECTED_DAYS } = useContext(FormStepsContext);
    const { handleSelectionPreachers } = useSelectionPreachers()

    console.log(SELECTED_DAYS)
    return (
        <Step
        key={`step-${3}`}
        step={3}
        label="Ahora añada un predicador para cada fecha:">
            {Object.keys(DAYS_BY_MONTH).length !== 0 && (<Seniors></Seniors>)}
            {
                Object.keys(DAYS_BY_MONTH).length !== 0 ? 
                <ul className="mt-10 max-w-[600px] m-auto">
                    {Object.keys(DAYS_BY_MONTH).map((month, index) => (
                        <li key={`month-${index}`}>
                            <h4 className="text-4xl mb-4 text-indigo-950 font-bold">{month}</h4>
                            {
                                DAYS_BY_MONTH[month].map((day, iDay) => {
                                    let seniorPerWeek = seniors[day.week.index % seniors.length];
                                    return (<Card 
                                    key={iDay} 
                                    data-date={day.date}
                                    data-senior={seniorPerWeek.id}
                                    shadow="sm"
                                    className="p-5 mb-5 transition-all">
                                        <span className="font-bold text-indigo-900 text-xl mb-3">{ day.text }</span>
                                        <span className="text-xs uppercase text-foreground-500">Anciano de guardia: </span>
                                        <span className="font-bold text-foreground-700">{ seniorPerWeek.name }</span>
                                        <Select
                                            className="max-w-xs my-3"
                                            items={PREACHERS_INIT}
                                            label="Elija un predicador"
                                            size="sm"
                                            value={SELECTED_PREACHERS[day.date] || ''}
                                            onChange={(preacher)=> handleSelectionPreachers(day.date, preacher)}>
                                            {(preacher) => <SelectItem>{preacher.label}</SelectItem>}
                                        </Select>
                                    </Card>
                                )})
                            }
                        </li>
                    ))}
                </ul>
                : <small className="max-w-[600px] m-auto pl-11">No existen los días { SELECTED_DAYS.join(', ') } para el rango de fecha seleccionado.</small> 
            }
        </Step>
    )
}