import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMovies } from "../../redux/actions/Movies";
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import { AuthLogout } from "../../redux/actions/Auth";
const Home = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams()
  const [paginate, setPaginate] = useState({page: query.get('page') ?? 1,limit: 7})
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetMovies(paginate));
  }, [paginate]); //require ketika get Dta
  const {data, error, loading } = useSelector((state) => state.movies);
  const {isLogin} = useSelector((state) => state.auth); //required
  useEffect(()=> {
    if(isLogin == false) {
      navigate('/login', {replace: true})
    }
},[isLogin])
  let totalPage = Array(data.totalPage).fill() ?? []
  console.log(totalPage, 'totalpage')
  if(loading) {
    return <div>loading...</div>
  }
  if(error) {
   return  <div>error</div>
  }

  const handlePaginate = (page)=> {
    setPaginate((prevState)=>({...prevState, page}))
    query.set('page', page)
    setQuery(query)
  }
  return (<>
    {isLogin ? (
      <button className="btn btn-danger" onClick={()=> {
        dispatch(AuthLogout())
      }}>Logout</button>
    ):(
      <Link to={'/login'} ><button className="btn btn-primary">Login Bre!</button></Link>
    )}
    <div class="d-flex flex-wrap">
      {data.results.map((item) => {
        return (
          <div class="card flex m-5">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">
                {item.synopsis}
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
      {totalPage.map((item, index)=> {
        return <button className={`btn m-2 ${paginate.page === index+1 ? `btn-primary`:`btn-danger`}`} onClick={()=> handlePaginate(index+1)}>{index+1}</button>
      })}
    </div>
  </>);
};

export default Home;
