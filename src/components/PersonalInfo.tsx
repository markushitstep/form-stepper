import React from "react";
import { IProps, onBlurHandlerProps, OnHandlerProps } from "../types/types";
import { switchValidation } from "../untils/validations";
import MyInput from "./UI/MyInput/MyInput";

const PersonalInfo: React.FC<IProps> = ({ formData, OnChangeFormData }) => {
  const {firstName, lastName, userName} = formData;

  const onHandler: OnHandlerProps = (value, name) => {
    let error = switchValidation(value, name);
    OnChangeFormData({ ...formData, [name]: {title: formData[name as keyof typeof formData].title, value: value, error: error, isBlur: formData[name as keyof typeof formData].isBlur } });
  }

  const onBlurHandler: onBlurHandlerProps = (name) => {
    switch(name) {
      case 'firstName':
        OnChangeFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'lastName':
        OnChangeFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'userName':
        OnChangeFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      default:
          break;
    }
  }
  
  return (
    <div className="personal-info-container">
      {
        Object.keys({firstName,lastName,userName}).map((currentValue:string, index:number) => (
          <MyInput 
            key={index}
            name={currentValue}
            type="text"
            hasblur={formData[currentValue as keyof typeof formData].isBlur}
            error={formData[currentValue as keyof typeof formData].error}
            placeholder={formData[currentValue as keyof typeof formData].title}
            value={formData[currentValue as keyof typeof formData].value}
            onBlur={(e:React.FocusEvent<HTMLInputElement>) => onBlurHandler(e.target.name)}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              onHandler(e.target.value, e.target.name);
            }}
          />
        ))
      }
    </div>
  );
}

export default PersonalInfo;