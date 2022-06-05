import React from "react";
import { IFormDataItem, IProps, onBlurHandlerProps, OnHandlerProps } from "../types/types";
import { switchValidation } from "../untils/validations";
import MyInput from './UI/MyInput/MyInput'

const OtherInfo: React.FC<IProps> = ({ formData, setFormData }) => {
  const {nationality, other}: {nationality:IFormDataItem, other:IFormDataItem} = formData;

  const onHandler: OnHandlerProps = (value, name) => {
    let error = switchValidation(value, name);
    setFormData({ ...formData, [name]: {title: formData[name as keyof typeof formData].title, value: value, error: error, isBlur: formData[name as keyof typeof formData].isBlur} });
  }

  const onBlurHandler: onBlurHandlerProps = (name) => {
    switch(name) {
      case 'nationality':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'other':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      default:
          break;
    }
  }

  return (
    <div className="other-info-container">
      {
        Object.keys({nationality, other}).map((currentValue:string, index:number) => (
          <MyInput 
            key={index}
            name={currentValue}
            type="text" 
            onBlur={(e:React.FocusEvent<HTMLInputElement>) => onBlurHandler(e.target.name)}
            hasblur={formData[currentValue as keyof typeof formData].isBlur}
            error={formData[currentValue as keyof typeof formData].error}
            placeholder={formData[currentValue as keyof typeof formData].title}
            value={formData[currentValue as keyof typeof formData].value}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              onHandler(e.target.value, e.target.name)
            }}
          />
        ))
      }
    </div>
  );
}

export default OtherInfo;