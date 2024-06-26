/** NOTES
 * 
 * email and password fields don't clear out correctly after submit
 * on click the submit button turns blue
 * 
 * 
 * 
 * 
 * 
*/
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        //Resets email and password field after submission.
        setEmail("");
        setPassword("");

    };

    return(
        <Form className='login-form' onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Keep me logged in.'/>
            </Form.Group>
            <div className='text-center'>
                <Button className=' login-btn' type="submit">
                    Log In
                </Button>
            </div>
            <div className='text-center'>
                <Button className='link-btn' variant='link' onClick={(e) => props.onFormSwitch('register')}>
                    Don't have an account? Register here.
                </Button>
            </div> 

        </Form>
    );
}
