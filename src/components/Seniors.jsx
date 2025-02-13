import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { Senior } from "./Senior";
import { FormStepsContext } from "../context/FormStepsContext";
import { useContext } from "react";

export const Seniors = () => {

    const {  seniors, setSeniors} = useContext(FormStepsContext);

    const handleDragEnd = (event) => {
        const { active, over } = event;
    
        if (!active.id !== over.id) {
          setSeniors((seniors) => {
            const oldIndex = seniors.findIndex((person) => person.id === active.id);
            const newIndex = seniors.findIndex((person) => person.id === over.id);
    
            console.log(arrayMove(seniors, oldIndex, newIndex));
            return arrayMove(seniors, oldIndex, newIndex);
          });
        }
    };

    return (
        <div className="max-w-[600px] m-auto">
            <h4 className="font-bold">Organice a los ancianos:</h4>
            <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}>
                <div className="flex flex-col gap-3 flex-wrap mt-3 border-3 rounded-md border-dashed border-indigo-600 p-5 bg-white">
                    <SortableContext
                    items={seniors}
                    strategy={verticalListSortingStrategy}>
                        {seniors.map((senior, index) => (
                            <Senior key={index} person={{senior, index}}/>
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </div>
    )
}
