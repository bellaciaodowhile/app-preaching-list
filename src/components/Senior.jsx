import { useSortable } from '@dnd-kit/sortable'
import React from 'react'
import { CSS } from '@dnd-kit/utilities';

export const Senior = ({ person }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform
     } = useSortable({ id: person.senior.id }) 
     const style = {
        transform: CSS.Transform.toString(transform),
     }
    return (
        <div
        ref={setNodeRef}
        style={style}
        className='py-3 px-3 border rounded-md cursor-grab active:cursor-grabbing'
        {...attributes}
        {...listeners}>
            <span className='font-bold text-indigo-900'>{ person.index + 1 }.</span> { person.senior.name }
        </div>
    )
}