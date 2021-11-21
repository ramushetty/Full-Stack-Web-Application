import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
const SignupPage = () => {

    
    const { register,handleSubmit,formState:{errors},reset } = useForm();
    const submitinfo = (data) => {
        
        
        if (data.password === data.confirmpassword) {
            const body = {
                "username": data.username,
                "email": data.email,
                "password":data.password
            }

            const requestoptions = {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body) 
            }
            fetch("/auth/signup", requestoptions)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
        }
        else {
            alert("passwords doesn't match")
        }
        reset()
        
    }
    return (
        <div className="container">
            <div className="form">
                <h1>Sign Up Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            {...register("username",{ required: true, maxLength: 25 })}   
                        />
                        <br></br>
                        {errors.username && <span style={{color: "red"}}>Username is required </span>}
                        <br></br>
                        {errors.username?.type==="maxLength" && <span style={{color: "red"}}>Max Characters should be 25 </span> }
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="username@example.com"
                            {...register("email",{ required: true, maxLength: 80 })}
                        />
                        <br></br>
                        {errors.email && <span style={{color: "red"}}>Email is required </span>}
                        <br></br>
                        {errors.email?.type==="maxLength" && <span style={{color: "red"}}>Max Characters should be 80 </span> }
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            {...register("password",{ required: true, minLength: 8 })}
                        />
                        <br></br>
                        {errors.password && <span style={{color: "red"}}>Password is required </span>}
                        <br></br>
                        {errors.password?.type==="minLength" && <span style={{color: "red"}}>Min Characters should be atleast 8 </span> }
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Confirm Password"
                            {...register("confirmpassword",{ required: true, minLength: 8 })}
                        />
                        <br></br>
                        {errors.confirmpassword && <span style={{color: "red"}}>Confirm Password is required </span>}
                        <br></br>
                        {errors.confirmpassword?.type==="minLength" && <span style={{color: "red"}}>Min Characters should be atleast 8 </span> }
                    </Form.Group>
                    <br></br>
                    <Form.Group >
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitinfo)}>
                            SignUp
                        </Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                    <small>
                        Already have account, <Link to="/login">Log In</Link>
                    </small>
                </Form.Group>

                </form>
            </div>
            
        </div>
    )
}

export default SignupPage