import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"
import dayjs from "dayjs"
import "./PostDetails.css"

const PostDetails = (props) => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [upvotes, setUpvotes] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq("id", id)
                .single();
            setPost(data);
            setUpvotes(data.upvotes);
        };
        fetchPost();
    }, [id])

    const handleUpvote = async (e) => {
        e.preventDefault()

        await supabase
            .from("Posts")
            .update({ upvotes: upvotes + 1 })
            .eq('id', id)

        setUpvotes((upvotes) => upvotes + 1)
    }

    const formattedCreationTime = dayjs(post.creationTime).format("MMMM D, YYYY h:mm A")

    return (
        <div>
            {
                post ? (
                    <>
                        <h1>{post.title}</h1>
                        <p>{formattedCreationTime}</p>
                        <img src={post.image} alt="" />
                        <p>{post.description}</p>
                        <button onClick={handleUpvote}>{upvotes} upvotes</button>
                    </>
                ) :
                    <p>Loading...</p>
            }
        </div>
    )
}
export default PostDetails