import React from "react";
import { switchValidation } from "../untils/validations";
import MyInput from './UI/MyInput/MyInput'

const OtherInfo = ({ formData, setFormData }) => {
  const {nationality, other} = formData;

  const onHandler = (value, name) => {
    let error = switchValidation(value, name);
    setFormData({ ...formData, [name]: {title: formData[name].title, value: value, error: error, isBlur: formData[name].isBlur} });
  }

  const onBlurHandler = (name) => {
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
        Object.keys({nationality, other}).map((currentValue, index) => (
          <MyInput 
            key={index}
            name={currentValue}
            type="text" 
            onBlur={(e) => onBlurHandler(e.target.name)}
            blurprops={formData[currentValue].isBlur}
            error={formData[currentValue].error}
            placeholder={formData[currentValue].title}
            value={formData[currentValue].value}
            onChange={(e) => {
              onHandler(e.target.value, e.target.name)
            }}
          />
        ))
      }
    </div>
  );
}

export default OtherInfo;