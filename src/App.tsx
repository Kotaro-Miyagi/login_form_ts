import './App.css';
import { useState } from "react";

interface FormValues {
    username: string;
    mailAddress: string;
    password: string;
}

function App() {
    const initialValues: FormValues = {
        username: "",
        mailAddress: "",
        password: ""
    };

    const [formValues, setFormValues] = useState<FormValues>(initialValues)
    const [formErrors, setFormErrors] = useState<Partial<FormValues>>({})
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }))
        setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }))
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const errors = validate(formValues)
        // if (Object.keys(errors).length === 0) {
        //     console.log("Form is valid. Submitting...")
        //     // Add your form submission logic here
        // } else　 {
        //     console.error("Form validation failed:", errors)
        //     setFormErrors(errors)
        // }　
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    const validate = (values: FormValues): Partial<FormValues> => {
        const errors: Partial<FormValues> = {}
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        if (!values.username) {
            errors.username = "Please enter your username"
        }
        if (!values.mailAddress) {
            errors.mailAddress = "Please enter your mail address"
        } else if (!regex.test(values.mailAddress)) {
            errors.mailAddress = "Please enter a valid email address"
        }
        if (!values.password) {
            errors.password = "Please enter your password"
        } else if (values.password.length < 4 || values.password.length > 15) {
            errors.password = "Please enter a password of 4 to 15 characters"
        }
        return errors
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>User Name</label>
                        <input type="text" placeholder="user" name="username" onChange={handleChange}/>
                        <p className="errorMsg">{formErrors.username}</p>
                    </div>
                    <div className="formField">
                        <label>E-mail Address</label>
                        <input type="text" placeholder="e-mail" name="mailAddress" onChange={handleChange}/>
                        <p className="errorMsg">{formErrors.mailAddress}</p>
                    </div>
                    <div className="formField">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                        <p className="errorMsg">{formErrors.password}</p>
                    </div>
                    <button className="submitButton" type="submit">Login</button>
                    {Object.keys(formErrors).length === 0 && isSubmit && (
                        <div className="msgOk">Login successful</div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default App
