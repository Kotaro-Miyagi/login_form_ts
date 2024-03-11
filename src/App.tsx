import './App.css';
import {useState} from "react";

interface FormValues {
    username: string;
    mailAddress: string;
    password: string;
}

function App() {
    const initialValues = {
        username: "",
        mailAddress: "",
        password: ""
    }
    const [formValues, setFormValues] = useState<FormValues | undefined>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValues(validate(formValues))
    }

    const validate = (values) => {
        const errors = {}
            if(!values.username) {
                errors.username = "Please input your username"
        }
    }

    return (
        <div className="formContainer">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Form</h1>
                <hr/>
                <div className="uiForm">
                    <div className="formField">
                        <label>User Name</label>
                        <input type="text" placeholder="user" name="username" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className="formField">
                        <label>E-mail Address</label>
                        <input type="text" placeholder="e-mail" name="mailAddress" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className="formField">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password"
                               onChange={(e) => handleChange(e)}/>
                    </div>
                    <button className="submitButton">Login</button>
                </div>
            </form>
        </div>
    );
}

export default App;