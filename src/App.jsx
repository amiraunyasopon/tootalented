import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import PostDetails from "./pages/PostDetails"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/new",
            element: <CreatePost />
        },
        {
            path: "/edit/:id",
            element: <EditPost />
        },
        {
            path: "/post/:id",
            element: <PostDetails />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ])
    return (
        <>
            <div className="whole-page">
                <Navbar />
                <div>
                    {element}
                </div>
            </div>
        </>
    )
}

export default App
