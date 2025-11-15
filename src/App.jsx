import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import NavBar from "./components/NavBar"

function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        // {
        //     path: "/gallery/edit/:id",
        //     element: <EditCrew />
        // },
        // {
        //     path: "/gallery/detailed/:id",
        //     element: <DetailedView />
        // }
    ])
    return (
        <>
            <NavBar />
            <div>
                {element}
            </div>
        </>
    )
}

export default App
