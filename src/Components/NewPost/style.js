import styled from "styled-components";

const Container = styled.div`
    width: 611px;
    height: 209px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const Title = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin: 5px;
`

const UrlInput = styled.input`
    width: 503px;
    height: 30px;
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    margin: 2px;
`

const DescriptionInput = styled.input`
    width: 502px;
    height: 66px;
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    margin: 2px;
`

export { Container, Title, UrlInput, DescriptionInput }