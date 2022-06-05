import React from "react";

export interface IFormDataItem {
    title: string;
    value: string,
    error: string,
    isBlur: boolean
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
