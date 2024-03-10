import './App.css';

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>Login Form</h1>
          <hr />
          <div className="uiForm"></div>
          <div className="formField">
              <label>User Name</label>
              <input type="text" placeholder="user"/>
              <label>E-mail</label>
              <input type="text" placeholder="e-mail"/>
              <label>Password</label>
              <input type="text" placeholder="password"/>
          </div>
      </form>
    </div>
  );
}

export default App;
