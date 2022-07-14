import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GetMovies, } from "../../redux/actions/Movies"

const Home = ()=> {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(GetMovies())
    },[])
    return(
        <div>ini home</div>
    )
}

export default Home