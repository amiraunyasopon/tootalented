import { supabase } from '../client'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import "./Landing.css"

const Landing = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from("Posts")
                .select()
                .order("created_at", { ascending: true })
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="readPosts">
            {/* maps all the posts in the 'Posts' table */}
            {
                posts && posts.length > 0 ?
                    [...posts]
                        .sort((a, b) => a.id - b.id)
                        .map((post, index) =>
                            <Post
                                key={index}
                                creationTime={post.created_at}
                                id={post.id}
                                title={post.title}
                                upvotes={post.upvotes}
                            />
                        ) : <h2>{"No Posts Yet"}</h2>
            }
        </div>
    )
}
export default Landing