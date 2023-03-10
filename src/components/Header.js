import styled from "styled-components";
import { UserInfoContext } from "../contexts/UserContext";
import { useState } from "react";
import {BsChevronDown} from 'react-icons/bs'

export default function Header() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [clicked, setClicked] = useState(false);



    return (
        <Container>
            <h1>linkr</h1>
            <RightContainer>
                <DropdownButton onClick={() => setClicked(!clicked)}>
                    <BsChevronDown />
                    <ImageContainer>
                        <UserImage src={userInfo?.imageUrl}/>
                    </ImageContainer>
                </DropdownButton>
                {clicked ? (
                    <DropdownDiv>
                        <DropdownMenu>
                            <LogoutButton>Logout</LogoutButton>
                        </DropdownMenu>
                    </DropdownDiv>
                ) : null}
            </RightContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background: #151515;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 100vw;
    h1 {
        font-family: 'Passion One', cursive;
        font-size: 49px;
        letter-spacing: 0.05em;
        line-height: 117px;
        padding-left: 1vw;
    }
`
const RightContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
`

const DropdownDiv = styled.div`
    width: 100%;
`

const DropdownButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: static;
`

const DropdownMenu = styled.ul`
    position: fixed;
    list-style-type: none;
    background: pink;
    z-index: 3;
`

const LogoutButton = styled.button`
    background: transparent;
    border: none;
    background: #151515;
    
`

const UserImage = styled.img`
    display: inline;
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    width: auto;
`
const ImageContainer = styled.div`
    height: 60px;
    width: 60px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`