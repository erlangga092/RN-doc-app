import * as React from 'react';

interface useFormMethod<T> {
    formValues: T;
    getFieldValue: (key: keyof T) => any;
    setFieldValue: (key: keyof T, value: any) => void;
    setFieldsValue: (values: T) => void;
}

export function useForm<
    FormField extends {
        [key: string]: any;
    },
>(initialValue: FormField): useFormMethod<FormField> {
    const [values, setValues] = React.useState<FormField>(initialValue);
    const getFieldValue = (key: keyof FormField) => values[key];
    const setFieldsValue = (argValues: FormField) => setValues(argValues);

    const setFieldValue = (key: keyof FormField, value: any) =>
        setValues({
            ...values,
            [key]: value,
        });

    return { formValues: values, getFieldValue, setFieldValue, setFieldsValue };
}
