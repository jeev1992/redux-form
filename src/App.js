import logo from './logo.svg';
import './App.css';
import SignInForm from './components/SignInForm';
import {reduxForm} from 'redux-form'



function App() {

  const handleSignIn = values => {
		console.log(values);
	};

  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
          <SignInForm  onSubmit={handleSignIn}/>
        </div>
      </div>
  );
}

export default App;
