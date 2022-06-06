
interface ValidationProps{
    (value: string, name: string, passwordValue?: string ): string 
}

export const switchValidation: ValidationProps = (value,name, passwordValue) => {
    switch (name) {
        case "email": {
            return hasEmailValidationErrors(value,name);
        }
        case "password": {
            return hasPasswordValidationErrors(value,name);
        }
        case "confirmPassword": {
            return hasConfirmPassValidationErrors(value,name,passwordValue);
        }
        case "firstName": {
            return hasNameValidationErrors(value,name);
        }
        case "lastName": {
            return hasNameValidationErrors(value,name);
        }
        case "userName": {
            return hasNameValidationErrors(value,name);
        }
        case "nationality": {
            return hasOtherValidationErrors(value,name);
        }
        case "other": {
            return hasOtherValidationErrors(value,name);
        }
        default:
            return '';
    }
}

export const hasEmailValidationErrors: ValidationProps = (value, name) => {
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorMessage = '';
    if (!regEmail.test(String(value).toLowerCase())) {
        errorMessage = `Некорректный ${name}`;
    }
    if(!value){
        errorMessage = `${name} не может быть пустым`;
    } 
    return errorMessage; 
}

export const hasPasswordValidationErrors: ValidationProps = (value, name) => {
    let errorMessage = '';
    if(value.length < 4 || value.length > 8){
        errorMessage = `${name} не может быть длиннее 8 и меньше 3 символов`;
    }
    if(!value){
        errorMessage = `${name} не может быть пустым`;
    } 
    return errorMessage;
}

export const hasConfirmPassValidationErrors: ValidationProps = (value, name, passwordValue) => {
    let errorMessage = '';
    if(!value) {
        errorMessage = `${name} не может быть пустым`;
    }
    if(passwordValue !== value) {
        errorMessage = `${name} не совпадает`;
    }
    return errorMessage;
}

export const hasNameValidationErrors: ValidationProps = (value, name) => {
    let errorMessage = '';
    if(value.length < 3) {
        errorMessage = `${name} не может быть меньше 3 символов` 
    }
    if(!value) {
        errorMessage = `${name} не может быть пустым`;
    }
    return errorMessage;
}

export const hasOtherValidationErrors: ValidationProps = (value, name) => {
    let errorMessage = '';
    if(value.length < 3) {
        errorMessage = `${name} не может быть меньше 3 символов` 
    }
    if(!value) {
        errorMessage = `${name} не может быть пустым`;
    }
    return errorMessage;
}
