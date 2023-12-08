import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [formData, setFormData] = useState(initialValues);

    const onChange = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(formData);
    }

    return {
        formData,
        onChange,
        onSubmit
    }
}