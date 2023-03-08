import { Container, Title, UrlInput, DescriptionInput } from "./style";

export default function NewPostCard(){
    return(
        <Container>
            <Title>What are you going to share today?</Title>
            <UrlInput placeholder="http://..."></UrlInput>
            <DescriptionInput placeholder="Awesome article about #javascript..."></DescriptionInput>
        </Container>
    )
}