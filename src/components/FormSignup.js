import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function FormSignup() {
    const db = 'localhost:5000/signup';

    const [form, setForm] = useState({
        email: '',
        password: '',
        username: '',
        imageUrl: ''
    });

    const [disabled, setDisabled] = useState(false);

    function handleSignup(event) {
        const signup = axios.post(db, form);
        event.preventDefault();
        setDisabled(true);
        signup.then(completeSignup);
        signup.catch(checkError);
    };

    function handleForm(e) {
        
    }
}