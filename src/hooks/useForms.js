import { useRef, useState } from "react";

// const ref = useRef(null);

export const useForms = () => {
    
    const [submitted, setSubmitted] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
        
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setSubmitted(data);

        return submitted;
    }

    // const resetForm = (ref) => {
    //     ref.current.reset
    // }

    return {
        onSubmit,
        submitted,
        setSubmitted,
        // resetForm
    }
}