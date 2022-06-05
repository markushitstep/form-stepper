import { Dispatch, SetStateAction } from "react";

export interface IFormDataItem {
    title: string;
    value: string;
    error: string;
    isBlur: boolean;
}

export interface IFormData {
    email: IFormDataItem;
    password: IFormDataItem;
    confirmPassword: IFormDataItem;
    firstName: IFormDataItem;
    lastName: IFormDataItem;
    userName: IFormDataItem;
    nationality: IFormDataItem;
    other: IFormDataItem;
}
export interface IProps  {
    formData: IFormData;
    setFormData: Dispatch<SetStateAction<IFormData>>;
} 

export interface OnHandlerProps {
    (value: string, name: string): void;
}

export interface onBlurHandlerProps {
    ( name: string): void;
}

