import React, { useState, useEffect } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { hasConfirmPassValidationErrors, hasEmailValidationErrors, hasNameValidationErrors, hasOtherValidationErrors, hasPasswordValidationErrors } from "../untils/validations";
import { IFormData } from "../types/types";


const Form: React.FC = () =>{
  const [page, setPage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [formData, setFormData] = useState<IFormData>({
    email: {
      title: "Email",
      value: "",
      error: "",
      isBlur: false
    },
    password: {
      title: "Password",
      value: "",
      error: "",
      isBlur: false
    },
    confirmPassword: {
      title: "ConfirmPass",
      value: "",
      error: "",
      isBlur: false
    },
    firstName: {
      title: "Name",
      value: "",
      error: "",
      isBlur: false
    },
    lastName: {
      title: "LastName",
      value: "",
      error: "",
      isBlur: false
    },
    userName: {
      title: "UserName",
      value: "",
      error: "",
      isBlur: false
    },
    nationality: {
      title: "Nationality",
      value: "",
      error: "",
      isBlur: false
    },
    other: {
      title: "Other",
      value: "",
      error: "",
      isBlur: false
    }
  });
  const [isFormValid, setFormValid] = useState<boolean>(false);
  
  const FormTitles:string[] = ["Sign Up", "Personal Info", "Other"];
  
  const setData = () => {
    setPage((currPage) => currPage + 1)
    setProgress(progress+(100/FormTitles.length)); 
    setFormValid(false);
  }

  const prevPage = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage((currPage) => currPage - 1);
    setProgress(progress-(100/FormTitles.length))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    (page === FormTitles.length - 1) ? console.log(formData) : setData()
  }

  useEffect(() => {
    setProgress(100/FormTitles.length);
  },[FormTitles.length])

  useEffect(() => {
    switch(page) {
      case 0:{
        const isValidForm: boolean = (
          !hasEmailValidationErrors(formData.email.value, formData.email.title) && 
          !hasPasswordValidationErrors(formData.password.value, formData.password.title) && 
          !hasConfirmPassValidationErrors(formData.confirmPassword.value, formData.confirmPassword.title, formData.password.value));
        setFormValid(isValidForm);
        break;
      }
      case 1:{
        const isValidForm: boolean = (
          !hasNameValidationErrors(formData.firstName.value, formData.firstName.title) &&
          !hasNameValidationErrors(formData.lastName.value, formData.lastName.title) &&
          !hasNameValidationErrors(formData.userName.value, formData.userName.title)
        )
        setFormValid(isValidForm);
        break;
      }
      case 2:{
        const isValidForm: boolean = (
          !hasOtherValidationErrors(formData.nationality.value, formData.nationality.title) &&
          !hasOtherValidationErrors(formData.other.value, formData.other.title)
        )
        setFormValid(isValidForm);
        break;
      }
      default:
        break;
    }
  },[formData, page])

  const progressStyle = { width: `${progress}%`}

  const FormPages: JSX.Element[] = [
    <SignUpInfo  formData={formData} OnChangeFormData={setFormData}/>, 
    <PersonalInfo formData={formData} OnChangeFormData={setFormData} />,
    <OtherInfo formData={formData} OnChangeFormData={setFormData}/>,
  ];
  
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="progressbar">
          <div className='progressbarFill' style={progressStyle} />
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            {FormPages[page]}
          </div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={prevPage}
            >
              Prev
            </button>
            <button
              disabled={!isFormValid}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;