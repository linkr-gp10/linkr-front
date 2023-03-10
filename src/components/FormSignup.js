import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormSignup() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        username: '',
        imageUrl: ''
    });

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function handleSignup(event) {
        const signup = axios.post('https://api-linkr-09wl.onrender.com/signup', form);
        event.preventDefault();
        setDisabled(true);
        signup.then(completeSignup);
        signup.catch(checkError);
    };

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function completeSignup() {
        console.log("OK!");
        setDisabled(false);
        navigate("/");
    }

    function checkError(error) {
        if (error.response.status === 422) {
            alert("All fields are required.");
        } else if (error.response.status === 409) {
            alert("This e-mail address is already registered.")
            setForm({
                email: '',
                password: '',
                username: '',
                imageUrl: '' 
            })
        }
        setDisabled(false);
    }

    return (
        <Form onSubmit={handleSignup}>
            <Field type="text" name="email" data-test="email" placeholder="e-mail" value={form.email} onChange={handleForm} disabled={disabled} />
            <Field type="password" name="password" data-test="password" placeholder="password" value={form.password} onChange={handleForm} disabled={disabled} />
            <Field type="text" name="username" data-test="username" placeholder="username" value={form.username} onChange={handleForm} disabled={disabled} />
            <Field type="text" name="imageUrl" data-test="picture-url" placeholder="picture url" value={form.imageUrl} onChange={handleForm} disabled={disabled} />
            <SignupButton disabled={disabled} data-test="sign-up-btn">Sign Up</SignupButton>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const Field = styled.input`
    border-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    width: 319px;
    height: 55px;
    padding-left: 10px;
    ::placeholder {
        color: #9F9F9F;
    }
`
const SignupButton = styled.button`
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    background: #1877F2;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 329px;
    height: 55px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 35px;
`
