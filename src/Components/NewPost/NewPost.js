import { Container, Title, UrlInput, DescriptionInput, PublishButton } from "./style";
import { useState } from "react";
import api from '../../config/api.js';

export default function NewPostCard() {
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        if (!link || !description) {
            alert("You must fill in all fields!")
        } else {
            savePosts()
        }
    }

    const savePosts = async () => {
        try {
            setLoading(true)
            const data = await api.post('/posts', { link, description })
            if (data.status === 201) {
                setLoading(false)
                setLink("")
                setDescription("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <form onSubmit={handleChange}>
                <Title>What are you going to share today?</Title>
                <UrlInput placeholder="http://..." onChange={e => setLink(e.target.value)} value={link} readOnly={loading} />
                <DescriptionInput placeholder="Awesome article about #javascript..." onChange={e => setDescription(e.target.value)} value={description} readOnly={loading} />
                <PublishButton disabled={loading}>{loading ? "Publishing..." : "Publish"}</PublishButton>
            </form>
        </Container>
    )
}