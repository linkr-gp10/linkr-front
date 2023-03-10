import PostCard from "../Components/Post/PostCard";
import { ThreeDots } from "react-loader-spinner";

export default function Timeline(props) {
    const { posts } = props
    return (
        <>
            {
                !posts ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : posts.length === 0 ? <p>There are no posts yet</p> : posts.map((item) => { return <PostCard key={item.id} post={item} /> })
            }
        </>
    )
}