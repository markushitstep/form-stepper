import React from "react";
import { switchValidation } from "../untils/validations";
import MyInput from "./UI/MyInput/MyInput";

const PersonalInfo = ({ formData, setFormData }) => {
  const {firstName, lastName, userName} = formData;

  const onHandler = (value, name) => {
    let error = switchValidation(value, name);
    setFormData({ ...formData, [name]: {title: formData[name].title, value: value, error: error, isBlur: formData[name].isBlur } });
  }

  const onBlurHandler = (name) => {
    switch(name) {
      case 'firstName':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'lastName':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'userName':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      default:
          break;
    }
  }
  
  return (
    <div className="personal-info-container">
      {
        Object.keys({firstName,lastName,userName}).map((currentValue, index) => (
          <MyInput 
            key={index}
            name={currentValue}
            type="text"
            blurprops={formData[currentValue].isBlur}
            error={formData[currentValue].error}
            placeholder={formData[currentValue].title}
            value={formData[currentValue].value}
            onBlur={(e) => onBlurHandler(e.target.name)}
            onChange={(e) => {
              onHandler(e.target.value, e.target.name);
            }}
          />
        ))
      }
    </div>
  );
}

export default PersonalInfo;