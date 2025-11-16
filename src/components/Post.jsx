import { supabase } from "../client"
import { useState } from "react"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import "./Post.css"

const Post = (props) => {
    const [upvotes, setUpvotes] = useState(props.upvotes)

    const handleUpvote = async (e) => {
        e.preventDefault()

        await supabase
            .from("Posts")
            .update({ upvotes: upvotes + 1 })
            .eq('id', props.id)

        setUpvotes((upvotes) => upvotes + 1)
    }

    const formattedCreationTime = dayjs(props.creationTime).format("MMMM D, YYYY h:mm A")

    return (
        <div className="post">
            <Link to={"post/" + props.id}>
                <h1>{props.title}</h1>
            </Link>
            <p>{formattedCreationTime}</p>
            <button onClick={handleUpvote}>{upvotes} upvotes</button>
            <Link to={"edit/" + props.id}>
                <p>edit</p>
            </Link>
        </div>
    )
}
export default Post