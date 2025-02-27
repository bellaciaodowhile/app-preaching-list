import { Button } from "@heroui/react";
import { useContext, useEffect } from "react";
import { ListPDF } from "../components/ListPDF/ListPDF";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { MONTHS } from "../helpers/months";
import { DAYS } from "../helpers/days";
import { FormStepsContext } from "../context/FormStepsContext";
import useSteps from "../hooks/useSteps";
import { RangeSelection } from "../components/RangeSelection";
import { DaysSelection } from "../components/DaysSelection";
import { PreachersSelection } from "../components/PreachersSelection";
import { usePdfName } from "../hooks/usePdf";

export const FormSteps = ({ preachers, seniors }) => {
    const { handleSteps, handleStepNext } = useSteps();
    const { 
        SELECTED_PREACHERS,
        steps,
        setSeniors,
        setPreachers,
        isActiveInput,
        setContentPdf,
        CONTENT_PDF,
    } = useContext(FormStepsContext);

    const namePdf = usePdfName(CONTENT_PDF);
    
    useEffect(() => {
        setSeniors(seniors);
    }, [seniors, setSeniors]);
    
    useEffect(() => {
        setPreachers(preachers);
    }, [preachers, setPreachers]);

     useEffect(() => {
        const dataPerMonths = {}
        for (let date in SELECTED_PREACHERS) {
            let month = MONTHS[date.split('-')[1] - 1];
            let currentDate = `${date.split('-')[2]}-${date.split('-')[1]}-${date.split('-')[0]}`;
            let day = DAYS[new Date(currentDate).getDay()];
    
            if (!dataPerMonths[month]) {
                dataPerMonths[month] = [];
            }
            
            dataPerMonths[month].push({
                day: `${day} ${date.split('-')[0]}`,
                preacher: isActiveInput[date] ? SELECTED_PREACHERS[date].preacher : preachers.filter(preacher => preacher.key === SELECTED_PREACHERS[date].preacher)[0]?.label,
                senior: seniors.filter(x => x.id == SELECTED_PREACHERS[date].senior)[0]?.name,
            });
        }
        setContentPdf(dataPerMonths);
    }, [SELECTED_PREACHERS]);

    const generatePdf = () => {
        return (
            <>
                <div className="w-full h-[750px]">
                    <PDFViewer width="100%" height="100%">
                        <ListPDF data={{CONTENT_PDF, name: namePdf}}/>
                    </PDFViewer>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="pb-14">
                <section className="flex gap-10 relative">
                    <div className="steps-main flex pl-5 w-full">
                        {steps.step === 1 && ( <RangeSelection/> )}
                        {steps.step === 2 && ( <DaysSelection/> )}
                        {steps.step === 3 && ( <PreachersSelection/> ) }
                        {steps.step === 4 && generatePdf()}
                    </div>
                </section>
                <section id="buttons-fixed" className="fixed w-full bg-white z-20 bottom-0 p-10 left-0">
                    <div className="max-w-[1024px] flex justify-center items-center gap-10 m-auto">
                        {steps.step >= 2 && (
                            <Button
                            className="bg-indigo-100 text-indigo-500 hover:-translate-y-1 hover:shadow-md w-full uppercase" 
                            radius="sm" 
                            size="lg"
                            onPress={() => handleSteps(steps.step - 1, 'prev')}>
                                Regresar
                            </Button>
                        )}
                        {steps.step == 4 && (
                            <PDFDownloadLink document={<ListPDF data={{CONTENT_PDF, name: namePdf}} />} fileName={`Lista de predicación - ${namePdf}.pdf`} className="w-full">
                                <Button
                                className={`bg-indigo-600 text-white hover:-translate-y-1 hover:shadow-md w-full uppercase`} 
                                radius="sm" 
                                size="lg">
                                    Descargar PDF
                                </Button>
                            </PDFDownloadLink>
                        )}
                        {steps.step <= 3 && (
                            <Button
                            className={`bg-indigo-600 text-white hover:-translate-y-1 hover:shadow-md w-full uppercase`} 
                            radius="sm" 
                            size="lg"
                            onPress={handleStepNext}>
                                { steps.step == 3 ? 'Generar PDF' : 'Siguiente' }
                            </Button>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}