import React, {Component} from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

        

class App extends Component {
    

    
    state = {
        pageName: 'Login Page',
        loginText: ' ',
        flag: 0
    };
    loginSuccess = () => {
        if(this.state.flag === 1)
        {
            this.setState({loginText : 'Login Successful!'});
        }
        else
        {
            this.setState({loginText : ' '});
        }
    }
    emailText = (event) => {
        if(event.target.value === 'admin')
        {
            this.setState({flag : 1});
        }
        else
        {
            this.setState({flag : 0});
        }
        
    }
    passText = (event) => {
        if(event.target.value === 'admin')
        {
            this.setState({flag : 1});
        }
        else
        {
            this.setState({flag : 0});
        }
    }
    render() {
        return (
            <Form className="login-form">
                <h1 className="text-center" > <span className="font-weight-bold">{this.state.pageName}</span></h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="enter email" name="email" onChange={this.emailText} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="enter password" name="password" onChange={this.passText} />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={this.loginSuccess}>Log in</Button>
                <div className="text-center pt-3">
                    Or Continue with social account.
                </div>  
                <FacebookLoginButton classname="mt-3 mb-3" />
                <h1>{this.state.loginText}</h1>
            </Form>
        );
    }
}
export default App;