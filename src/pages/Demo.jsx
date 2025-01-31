import { RangeCalendar } from "@heroui/calendar";
import { Button, CheckboxGroup, Accordion, AccordionItem, Select, SelectItem, Card } from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";
import { useEffect, useState } from "react";
import { CustomCheckbox } from "../components/CustomCheckbox";
import { Step } from "../components/Step";
import { motion } from "framer-motion";
import { today, getLocalTimeZone } from "@internationalized/date";
import { toast } from 'sonner';


export const Demo = () => {
    
    const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const MONTHS = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
    const PREACHERS_INIT = [
        { key: '1', label: 'Ted N. C. Wilson' },
        { key: '2', label: 'Paul Ratsara' },
        { key: '3', label: 'Juan Carlos Araya' },
        { key: '4', label: 'Alberto Timm' },
        { key: '5', label: 'Samuel Pippin' },
        { key: '6', label: 'Luis A. Torres' },
        { key: '7', label: 'Ricardo Graham' },
        { key: '8', label: 'José Luis de la Rosa' },
        { key: '9', label: 'Raúl M. García' },
        { key: '10', label: 'Orlando Asher' },
        { key: '11', label: 'Pablo C. C. A. Alvarado' },
        { key: '12', label: 'Juan Carlos Vázquez' },
        { key: '13', label: 'Guillermo Biaggi' },
        { key: '14', label: 'Javier L. Castañeda' },
        { key: '15', label: 'Jairo G. S. C. P. de la Rosa' },
        { key: '16', label: 'Gabriel A. R. de la Cruz' },
        { key: '17', label: 'Carlos A. M. de la Torre' },
        { key: '18', label: 'Fernando C. de la Vega' },
        { key: '19', label: 'Fabián F. C. de la Rosa' },
        { key: '20', label: 'Ezequiel A. de la Torre' }
    ]

    const [rangeDate, setRangeDate] = useState(false);
    const [SELECTED_DAYS, setSelectedDays] = useState([]);
    const [DAYS_BY_MONTH, setDaysByMonth] = useState(false);
    const [SELECTED_PREACHERS, setSelectedPreachers] = useState([]);
    const [steps, setSteps] = useState({step: 1, action: 'next'});

    const handleChangeDate = (newRange) => {
        setRangeDate(newRange);
        console.log(newRange)
    }

    const handleSteps = (step, action) => {
        setSteps({step, action});
    }

    const handleRangeSelection = (CURRENT_SELECTED_DAYS) => {
        console.log('handleRangeSelection');
        setSelectedPreachers({})
        const start = new Date(`${rangeDate?.start.year}-${rangeDate?.start.month}-${rangeDate?.start.day}`);
        const end = new Date(`${rangeDate?.end.year}-${rangeDate?.end.month}-${rangeDate?.end.day}`);
        const daysByMonth = {};
        const differenceInMilliseconds = end - start;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        for (let index = 0; index < differenceInDays; index++) {
            const currentDate = new Date(start);
            currentDate.setDate(start.getDate() + index);

            const dayName = DAYS[currentDate.getDay()];
            const month = MONTHS[currentDate.getMonth()];

            if (SELECTED_DAYS.includes(dayName)) {
                if (!daysByMonth[month]) {
                    daysByMonth[month] = [];
                }
                daysByMonth[month].push({
                    date: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`,
                    text: `${dayName} ${currentDate.getDate()} de ${month}`
                });
            }
        }
        if (SELECTED_DAYS.length === 0) {
            toast.error('Seleccione los días para continuar')
            return false;
        }
        setDaysByMonth(daysByMonth)
        return true;
        // console.log(daysByMonth)
    }
    
    // console.log(DAYS_BY_MONTH)

    // const handleStepThree = () => {
    //     console.log('Step 3');
    //     // console.log()
    //     console.log(DAYS_BY_MONTH)
    //     // Object.keys(DAYS_BY_MONTH).map(month => {
    //     //     DAYS_BY_MONTH[month].map(day => {
    //     //         console.log(day)
    //     //     })
    //     // })
    // }


    // onChange={setRangeDate}

    const borderAlert = (element, className) => {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
        }, 5000);
    }

    const handleSelectionPreachers = (date, preacher) => {
        console.log(SELECTED_PREACHERS)
        const monthCurrent = date.split('-')[1];
        const cardDateCurrent = document.querySelector(`[data-date="${ date }"]`);
        for (const dateSelected in SELECTED_PREACHERS) {
            const [day, month, year] = dateSelected.split('-');
            console.log(dateSelected)
            if (SELECTED_PREACHERS[dateSelected] === preacher.target.value && month == monthCurrent) {
                if (SELECTED_PREACHERS[dateSelected] !== '') {
                    const cardDate = document.querySelector(`[data-date="${dateSelected}"]`)
                    borderAlert(cardDate, 'border-info');
                    setSelectedPreachers(prevState => ({
                        ...prevState,
                        [date]: ''
                    }));
                    return toast.error(`${PREACHERS_INIT[preacher.target.value - 1].label} ya se ha elegido para el mes de ${ MONTHS[month - 1] }`)
                } 
            }
        }
        setSelectedPreachers(prevState => ({
            ...prevState,
            [date]: preacher.target.value
        }));
    }

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

        if (lengthSelectedPreachers === 0 || lengthSelectedPreachers != lengthDaysTotal) {
            toast.error('Debe añadir los predicadores a las fechas correspondientes para continuar')
            return false;
        }
        for (const dateSelected in SELECTED_PREACHERS) {
            if (SELECTED_PREACHERS[dateSelected] == '') {
                const cardDate = document.querySelector(`[data-date="${dateSelected}"]`)
                borderAlert(cardDate, 'border-danger');
                toast.error(`Debe seleccionar un predicador para la fecha ${dateSelected}, no se puede dejar en blanco ni repetir un predicador en el mismo mes`)
                return false;
            }
        }
        console.log(SELECTED_PREACHERS);
        // return true;
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
                console.log(SELECTED_PREACHERS);
                break;
        
            default:
                break;
        }
        handleSteps(steps.step + 1, 'next')
    }

    useEffect(() => {

    }, []);

    const renderDateRangeStep = () => {
        console.log('Step component 1')
        return (<Step
         key={`step-${1}`}
         step={1}
         label="Selecciona el rango de fecha:">
             <div className="flex gap-x-4">
                 <I18nProvider locale="es-ES"> 
                     <RangeCalendar 
                     color={'primary'}
                     aria-label="Fecha (Sin elección)"
                     onChange={setRangeDate}
                     value={rangeDate} />
                 </I18nProvider>
             </div>
         </Step>)
    }
    const renderDaysSelectionStep = () => {
        console.log('Step component 2')
        return (<Step
        key={`step-${2}`}
        step={2} 
        label="Seleccione los días del rango de fecha:">
            <div className="flex">
                <CheckboxGroup
                    classNames={{
                    base: "w-full",
                    }}
                    value={SELECTED_DAYS}
                    onChange={setSelectedDays} >
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
        </Step>)
    }
    const renderPreacherSelectionStep = () => {
        console.log('Step component 3')
        return (<Step
        key={`step-${3}`}
        step={3}
        label="Ahora añada un predicador para cada fecha:">
            {
                Object.keys(DAYS_BY_MONTH).length !== 0 ? 
                <ul className="mt-3">
                    {Object.keys(DAYS_BY_MONTH).map((month, index) => (
                        <li key={`month-${index}`}>
                            <h4 className="text-4xl mb-4 text-indigo-950 font-bold">{month}</h4>
                        {
                            DAYS_BY_MONTH[month].map((day, iDay) => (
                            <Card 
                            key={iDay} 
                            data-date={day.date}
                            shadow="sm"
                            className="p-5 mb-5 transition-all">
                                { day.text }
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
                            ))
                        }
                        </li>
                    ))}
                </ul>
                : 'Ninguna fecha seleccionada'
            }
        </Step>)
    }

    return (
        <div className="pb-14">
            
            <section className="flex gap-10 relative">
                <div className="steps-main flex pl-5 w-full">
                    {steps.step === 1 && renderDateRangeStep()}
                    {steps.step === 2 && renderDaysSelectionStep()}
                    {steps.step === 3 && renderPreacherSelectionStep() }
                    {steps.step === 4 && (
                        <h2 className="text-2xl font-bold">Paso 4</h2>
                    )}
                </div>
                <section className="text-foreground-50 bg-indigo-700 rounded-lg p-10 w-full h-full max-w-[50%] none ">
                    <h2 className="text-2xl font-bold">Aquí voy a colocar una breve explicación de como hacer el paso</h2>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem est quae ratione doloremque error ab, magni recusandae vitae quisquam itaque corporis sint rerum sed, sapiente commodi asperiores numquam vel debitis minima? Numquam consequatur ipsa doloremque perferendis? Quam dicta ducimus vero alias doloremque perspiciatis voluptatum ullam, facere eos ipsam reprehenderit atque quo consectetur rem ratione culpa numquam aliquid commodi iusto facilis temporibus nisi eius? Voluptas quis veniam necessitatibus pariatur alias? Quaerat est fugit itaque laborum laboriosam eaque, saepe quibusdam corrupti similique maxime hic quam fuga ipsa? Cupiditate quis reprehenderit ipsum provident labore? Architecto in autem laudantium. Corporis tempora nam dicta illo!</p>
                </section>
            </section>
            

            <section id="buttons-fixed" className="fixed w-full bg-white z-20 bottom-0 p-10 left-0">
                <div className="max-w-[1024px] flex justify-center items-center gap-10 m-auto">
                    {steps.step >= 2 && (
                        <Button
                        className="bg-indigo-100 text-indigo-500 hover:-translate-y-1 hover:shadow-md w-full uppercase" 
                        radius="sm" 
                        size="lg"
                        onClick={() => handleSteps(steps.step - 1, 'prev')}>
                            Regresar
                        </Button>
                        )}
                    <Button
                    className="bg-indigo-600 text-white hover:-translate-y-1 hover:shadow-md w-full uppercase " 
                    radius="sm" 
                    size="lg"
                    onClick={handleStepNext}>
                        { steps.step == 3 ? 'Generar PDF' : 'Siguiente' }
                    </Button>
                </div>
            </section>
        </div>
    )
}
