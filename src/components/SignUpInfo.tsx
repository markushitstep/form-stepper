
import React from "react";
import { IFormDataItem, IProps, onBlurHandlerProps, OnHandlerProps } from "../types/types";
import { switchValidation } from "../untils/validations";
import MyInput from "./UI/MyInput/MyInput";


const SignUpInfo: React.FC<IProps> = ({ formData, setFormData }) => {
  const {email, password, confirmPassword}: {email:IFormDataItem, password:IFormDataItem, confirmPassword:IFormDataItem} = formData;
  
  const onHandler: OnHandlerProps = (value, name) => {
    let error = switchValidation(value ,name , formData.password.value);
    setFormData({ ...formData, [name]: {title: formData[name as keyof typeof formData].title, value: value, error: error, isBlur: formData[name as keyof typeof formData ].isBlur }});
  }

  const onBlurHandler: onBlurHandlerProps = (name) => {
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
          Object.keys({email, password, confirmPassword}).map((currentValue:string, index:number) => (
            currentValue === 'password' || currentValue === 'confirmPassword'
            ? <MyInput 
                key={index}
                onBlur={ (e:React.FocusEvent<HTMLInputElement>) => onBlurHandler(e.target.name)}
                hasblur={formData[currentValue].isBlur}
                name={currentValue}
                type='password'
                error={formData[currentValue].error}
                placeholder={formData[currentValue].title}
                value={formData[currentValue].value}
                onChange={(e:React.ChangeEvent<HTMLInputElement>):void =>{
                  onHandler(e.target.value, e.target.name);
                }}
              />
            : <MyInput 
                key={index}
                name={currentValue}
                onBlur={ (e:React.FocusEvent<HTMLInputElement>) =>{ onBlurHandler(e.target.name)}}
                hasblur={formData[currentValue as keyof typeof formData ].isBlur}
                type="text"
                error={formData[currentValue as keyof typeof formData ].error}
                placeholder={formData[currentValue as keyof typeof formData ].title}
                value={formData[currentValue as keyof typeof formData ].value}
                onChange={(e:React.ChangeEvent<HTMLInputElement>):void =>{
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