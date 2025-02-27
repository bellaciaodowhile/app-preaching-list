import { useContext, useEffect, useState } from "react";
import { FormStepsContext } from "../context/FormStepsContext";
import { Step } from "./Step";
import { SeniorsOrder } from "./SeniorsOrder";
import useSelectionPreachers from "../hooks/useSelectionPreachers";
import { Card, Select, SelectItem, Input, Button } from "@heroui/react";
import { useToggleVisibility } from "../hooks/useToggleVisibility";


export const PreachersSelection = () => {

    const { DAYS_BY_MONTH, seniors, SELECTED_PREACHERS, SELECTED_DAYS, preachers, setSelectedPreachers, isActiveInput } = useContext(FormStepsContext);
    const { handleSelectionPreachers } = useSelectionPreachers();
    const { toggleVisibility } = useToggleVisibility();

    return (
        <Step
        key={`step-${3}`}
        step={3}
        label="Ahora añada un predicador para cada fecha:">
            {Object.keys(DAYS_BY_MONTH).length !== 0 && (<SeniorsOrder/>)}
            {
                Object.keys(DAYS_BY_MONTH).length !== 0 ? 
                <ul className="mt-10 max-w-[600px] m-auto">
                    {Object.keys(DAYS_BY_MONTH).map((month, index) => (
                        <li key={`month-${index}`}>
                            <h4 className="text-4xl mb-4 text-indigo-950 font-bold">{month}</h4>
                            {
                                DAYS_BY_MONTH[month].map((day, iDay) => {
                                    let seniorPerWeek = seniors[day.week.index % seniors.length];
                                    const preacherText = isNaN(SELECTED_PREACHERS[day.date]?.preacher) ? SELECTED_PREACHERS[day.date]?.preacher : '';
                                    console.log(Number(SELECTED_PREACHERS[day.date]?.preacher))
                                    return (<Card 
                                    key={iDay} 
                                    data-date={day.date}
                                    data-senior={seniorPerWeek.id}
                                    data-week={day.week.index}
                                    shadow="sm"
                                    className="p-5 mb-5 transition-all">
                                        <div className="flex items-center justify-between mb-3">
                                            <h6 className="font-bold text-indigo-900 text-xl block">{ day.text }</h6>
                                            <Button 
                                            variant="bordered"
                                            color="primary" 
                                            size="md"
                                            className="text-indigo-800 rounded-full"
                                            onPress={()=> toggleVisibility(day.date)}>
                                                {isActiveInput[day.date] ? 'Seleccionar un predicador' : 'Añadir predicador'}
                                            </Button>
                                        </div>
                                        <span className="text-xs uppercase text-foreground-500">Anciano de guardia: </span>
                                        <span className="font-bold text-foreground-700">{ seniorPerWeek.name }</span>
                                        <Select
                                            className={`my-3 ${!isActiveInput[day.date] || `hidden`}`}
                                            items={preachers}
                                            label={'Elija un predicador'}
                                            selectedKeys={isActiveInput[day.date] ? [] : [SELECTED_PREACHERS[day.date]?.preacher]}
                                            size="sm"
                                            value={SELECTED_PREACHERS[day.date]?.preacher || ''}
                                            onChange={(preacher)=> handleSelectionPreachers(day.date, preacher)}>
                                            {(preacher) => <SelectItem key={preacher.key}>{preacher.label}</SelectItem>}
                                        </Select>
                                        <Input 
                                            label="Predicador" 
                                            placeholder="Escriba el nombre del predicador" 
                                            className={`my-3 ${isActiveInput[day.date] || `hidden`}`} 
                                            type="text"
                                            value={isActiveInput[day.date] ? preacherText : ''}
                                            onChange={(preacher)=> handleSelectionPreachers(day.date, preacher)}
                                            maxLength={30}/>
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