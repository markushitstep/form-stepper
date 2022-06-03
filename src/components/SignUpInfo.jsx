
import React from "react";
import { switchValidation } from "../untils/validations";
import MyInput from "./UI/MyInput/MyInput";

const SignUpInfo = ({ formData, setFormData }) => {
  const {email, password, confirmPassword} = formData;
  
  const onHandler = (value, name) => {
    let error = switchValidation(value ,name , formData.password.value);
    setFormData({ ...formData, [name]: {title: formData[name].title, value: value, error: error, isBlur: formData[name].isBlur }});
  }

  const onBlurHandler = (name) => {
    switch(name) {
      case 'email':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'password':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      case 'confirmPassword':
        setFormData({ ...formData, [name]: {title: formData[name].title, value: formData[name].value, error: formData[name].error, isBlur: true }});
        break;
      default:
          break;
    }
  }

  return (
    <div className="sign-up-container">
        {
          Object.keys({email, password, confirmPassword}).map((currentValue, index) => (
            currentValue === 'password' || currentValue === 'confirmPassword'
            ? <MyInput 
                key={index}
                onBlur={ (e) => onBlurHandler(e.target.name)}
                hasblur={formData[currentValue].isBlur}
                name={currentValue}
                type='password'
                error={formData[currentValue].error}
                placeholder={formData[currentValue].title}
                value={formData[currentValue].value}
                onChange={(e) =>{
                  onHandler(e.target.value, e.target.name);
                }}
              />
            : <MyInput 
                key={index}
                name={currentValue}
                onBlur={ (e) =>{ onBlurHandler(e.target.name)}}
                hasblur={formData[currentValue].isBlur}
                type="text"
                error={formData[currentValue].error}
                placeholder={formData[currentValue].title}
                value={formData[currentValue].value}
                onChange={(e) =>{
                  onHandler(e.target.value, e.target.name);
                }}
              />
            )
          )
        }
    </div>
  );
}

export default SignUpInfo;