import { useRouter } from "next/router"
import parse from 'html-react-parser';
import { useEffect } from "react";

const ArticleDetail =({data}) => {
    const router = useRouter() //berlaku ketika di react js component   
    // useEffect(()=> {
    //     if(typeof window !== undefined) {
    //         localStorage.getItem('aha')
    //     }
    // },[])
    const {data:detailArticle} = data
    console.log(detailArticle[0])
    return(
       <>
       <h3>{detailArticle[0].title}</h3>
       <article>
        {parse(detailArticle[0].content)}
       </article>
       </>
    )
  }
  //SSR
  // This gets called on every request
  export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://gyga-news.herokuapp.com/api/v1/articles/${context.params.id}`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  export default ArticleDetail