import Link from "next/link"
import styles from '../../styles/Home.module.css'
const Home =({ data }) => {
    const {results} = data.data
    return(
       <main className={`${styles['container-inner']} ${styles['container-wrapper']}`}>
        {results.map((item, index)=> {
          return(
            <div key={index}>{item.title} 
            <Link href={`/articles/${item.article_id}`}>
              <button> Read More</button>
            </Link>
            </div>
          )
        })}
       </main>
    )
  }
  //SSR
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://gyga-news.herokuapp.com/api/v1/articles?limit=9999999999`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  //SSG
  // export async function getStaticProps() {
  //   // Fetch data from external API
  //   const res = await fetch(`https://gyga-news.herokuapp.com/api/v1/articles?limit=999999`)
  //   const data = await res.json()
  
  //   // Pass data to the page via props
  //   return { props: { data } }
  // }
  
  // 1
  //  - ngga semua orang punya server besar
      // (ssg di fetch itu ketika ada data baru aja selanjutnya dia ga akan request ke Backend End)
  // itu buat cache, dimana ketika kita memakai yang namanya server side props, itu artinya akan ada loading, kalo kamu ngga mau loading, itu initialPropsnya itu bisa pake SSG, in case down server, dia tetep bakal dapat diakses karena dia generate langsung html, walaupun dia dari api, itu hanya pertama kali aja dia ngeget pas build
  // skala kecil, cache, blog, yang gga ada perubahan masive, 
  export default Home