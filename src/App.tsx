import './App.css';

function App() {
    return (
        <div className="formContainer">
            <form>
                <h1>Login Form</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>User Name</label>
                        <input type="text" placeholder="user" name="username" />
                    </div>
                    <div className="formField">
                        <label>E-mail Address</label>
                        <input type="text" placeholder="e-mail" name="e-mail" />
                    </div>
                    <div className="formField">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" />
                    </div>
                    <button className="submitButton">Login</button>
                </div>
            </form>
        </div>
    );
}

export default App;