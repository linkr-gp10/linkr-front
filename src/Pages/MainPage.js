import NewPostCard from "../Components/NewPost/NewPost";
import PostCard from "../Components/Post/PostCard";
import { useEffect, useState } from "react";
import api from "../config/api";
import { Title } from "../Components/TrendingCard/style";


export default function MainPage(){
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getPosts();
        // const interval = setInterval(() => {
        //     getPosts();
        // }, 5000);
        // return () => clearInterval(interval);
    }, []);

    const getPosts = async () => {
        try {
            const { data } = await api.get('/timeline')
            setPosts(data)
        } catch (error) {
            //alert("Ocorreu um erro, por favor recarregue a página!")
        }
    }

    return(
        <>
            <Title>timeline</Title>
            <NewPostCard />
            <PostCard posts={posts} />
        </>
    )
}