import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserInfoContext } from "../contexts/UserContext";

export default function FormSignin() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [disabled, setDisabled] = useState(false);
    const { setUserToken } = useContext(AuthContext);
    const { setUserInfo } = useContext(UserInfoContext);
    const navigate = useNavigate();

    function handleSignin(event) {
        const signin = axios.post('https://api-linkr-09wl.onrender.com/signin', form);
        event.preventDefault();
        setDisabled(true);
        signin.then((res) => {
            if (!localStorage.getItem("userToken")) {
                setUserToken(res.data);
                localStorage.setItem("userToken", res.data);
            }
            userInfo(res.data);
            console.log("OK!");
            setDisabled(false);
            navigate("/timeline")
        });
        signin.catch(checkError);
    };

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function userInfo(token) {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        const promise = axios.get('https://api-linkr-09wl.onrender.com/signin', config);
        promise.then((res) => {
            setUserInfo(res.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }

    function checkError(error) {
        if (error.response.status === 422) {
            alert("All fields are required.");
        } else if (error.response.status === 403) {
            alert("Wrong e-mail and/or password.")
            setForm({
                email: '',
                password: ''
            })
        }
        setDisabled(false);
    }

    return (
        <Form onSubmit={handleSignin}>
            <Field type="text" name="email" placeholder="e-mail" value={form.email} onChange={handleForm} disabled={disabled} />
            <Field type="password" name="password" placeholder="password" value={form.password} onChange={handleForm} disabled={disabled} />
            <SigninButton disabled={disabled}>Log In</SigninButton>
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

const SigninButton = styled.button`
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
