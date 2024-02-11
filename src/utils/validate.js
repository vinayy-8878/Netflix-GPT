export const checkValidData=(email,password,name)=>{
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);  
//    const fullNameValid= /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    // if(!fullNameValid) return "Name is not valid";
    if (name !== null && name !== "" && !/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)) {
        return "Name is not valid";
    }
    if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password is not valid";
return null;
}