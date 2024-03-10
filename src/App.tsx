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
    const [formValues, setFormValues] = useState<FormValues>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }

    return (
        <div className="formContainer">
            <form>
                <h1>Login Form</h1>
                <hr />
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
                        <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)}/>
                    </div>
                    <button className="submitButton">Login</button>
                </div>
            </form>
        </div>
    );
}

export default App;