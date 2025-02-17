import { useContext, useEffect, useState } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { Step } from "./Step";
import { Seniors } from "./Seniors";
import useSelectionPreachers from "../hooks/useSelectionPreachers";
import { Card, Select, SelectItem, Input, Button, Link } from "@heroui/react";


export const PreachersSelection = () => {

    const { DAYS_BY_MONTH, seniors, SELECTED_PREACHERS, SELECTED_DAYS, preachers, setSelectedPreachers } = useContext(FormStepsContext);
    const { handleSelectionPreachers } = useSelectionPreachers();

    const [isActiveInput, setIsActiveInput] = useState(false);

    const toggleVisibility = (date) => {
        
    }

    console.log(DAYS_BY_MONTH)

    useEffect(() => {
        // setSelectedPreachers(SELECTED_PREACHERS)
    }, [setSelectedPreachers, SELECTED_PREACHERS]);

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
                                    const preacherCurrent = preachers[Number(SELECTED_PREACHERS[day.date]?.preacher) - 1];
                                    console.log(preacherCurrent?.label)
                                    console.log('%c SELECTED_PREACHERS[day.date]', 'padding: 10px; background: #D64265;')
                                    return (<Card 
                                    key={iDay} 
                                    data-date={day.date}
                                    data-senior={seniorPerWeek.id}
                                    data-week={day.week.index}
                                    shadow="sm"
                                    className="p-5 mb-5 transition-all">
                                        <span className="font-bold text-indigo-900 text-xl mb-3">{ day.text }</span>
                                        <span className="text-xs uppercase text-foreground-500">Anciano de guardia: </span>
                                        <span className="font-bold text-foreground-700">{ seniorPerWeek.name }</span>
                                        <Select
                                            className="my-3"
                                            items={preachers}
                                            label={'Elija un predicador'}
                                            selectedKeys={SELECTED_PREACHERS[day.date]?.preacher}
                                            size="sm"
                                            value={SELECTED_PREACHERS[day.date]?.preacher || ''}
                                            onChange={(preacher)=> handleSelectionPreachers(day.date, preacher)}>
                                            {(preacher) => <SelectItem key={preacher.key}>{preacher.label}</SelectItem>}
                                        </Select>
                                        <Button 
                                        variant="light" 
                                        color="primary" 
                                        className="underline text-indigo-800"
                                        onPress={()=> setIsActiveInput(!isActiveInput)}
                                        >
                                            Si el predicador no está en la lista, puedes añadirlo aquí.
                                        </Button>
                                        <Input 
                                        label="Predicador" 
                                        placeholder="Escriba el nombre del predicador" 
                                        className={isActiveInput || `hidden`} 
                                        type="text" />
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