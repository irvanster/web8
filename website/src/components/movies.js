import axios from "axios"
import { useEffect, useState } from "react"

const Movies = ()=> {
  const userLogin = JSON.parse(localStorage.getItem('userLogin')) ?? {} //v1
  const [formAddData, setFormAddData] = useState({})
  const formData = new FormData()
  formData.append('image', formAddData.image)
  formData.append('title', formAddData.title)
  formData.append('release_date', formAddData.release_date)
  formData.append('directed_by', formAddData.directed_by)
  formData.append('synopsis', formAddData.synopsis)
  formData.append('cast', formAddData.cast)
  formData.append('genre', formAddData.genre)
  // console dari formData
  for (const value of formData.values()) {
    console.log(value);
  }
  const handleAddNewMovies = ()=> {
    console.log(formAddData)
    axios({
      method: "POST",
      url: "https://test.dhanz.me/api/v1/movies",
      data: formData,
      headers: {
        authorization: `Bearer ${userLogin.data.token}`
      }
    }).then((res)=> {
      console.log(res)
    }).catch((err)=> {
      console.log(err)
    })
  }
  useEffect(()=> {
    // axios({
    //   method: "POST",
    //   url: 'https://test.dhanz.me/api/v1/refresh-token',
    //   data: {
    //     token: userLogin.data.token
    //   }
    // }).then((res)=> {
    //   if(res.data.code === "INVALID_TOKEN") {
    //     localStorage.setItem(JSON.stringify(DATA_DARI_BACKEND))
    // }
    // }).catch((err)=> {})
    // axios({
    //   method: "POST",
    //   url: 'https://test.dhanz.me/api/v1/refresh-token',
    //   data: {
    //     token: userLogin.data.token
    //   }
    // }).catch((err)=> {
    //   if(res.data.code === "INVALID_TOKEN") {
    //     router.replace('/login')
    //   }
    // })
  },[])
  const data = {
    results: [
      {
        "id": 51,
        "title": "Spidermaen",
        "genre": "action",
        "release_date": "2022-06-28",
        "directed_by": "Dhani",
        "duration": "undefined",
        "cast": "Lutfhi",
        "synopsis": "aokwowaow",
        "image": "1657705834968-636285232-[W2 Juli] Bengkel Mania_Weekly Report .jpg",
        "created_at": "2022-07-13T09:50:34.000Z",
        "updated_at": "2022-07-13T09:50:34.000Z"
    },
    ],
    "totalRows": 22,
    "totalData": 22,
    "totalPage": 15
  }
    // const arr = Array(data.totalPage)
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
      
    // }
  return(<>
      <form>
      {/* {image upload harus ada encType} */}
        <input type="text" placeholder="Title" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          title: e.target.value
        }))} /><br/>
        <input type="file" placeholder="image" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          image: e.target.files[0]
        }))} /><br/>
        <input type="text" placeholder="release_date" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          release_date: e.target.value
        }))} /><br/>
        <input type="text" placeholder="directed_by" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          directed_by: e.target.value
        }))} /><br/>
        <input type="text" placeholder="synopsis" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          synopsis: e.target.value
        }))} /><br/>
        <input type="text" placeholder="cast" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          cast: e.target.value
        }))} /><br/>
        <input type="text" placeholder="genre" onChange={(e)=> setFormAddData((prevData)=> ({
          ...prevData,
          genre: e.target.value
        }))} /><br/>
      </form>
    <div className="d-flex flex-wrap">
      <button className="btn btn-primary" onClick={()=> handleAddNewMovies()}>Add new movies</button>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>
      <div className="card shadow-xl p-5 m-2" style={{ width: '33.333%' }}></div>

      {/* {arr.map((item, i)=> {
        return(
          <div className="bg-primary">{i}</div>
        )
      })} */}
    </div>
  </>)
}


export default Movies