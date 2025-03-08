import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import images from "../../constants/images";
import { Link } from 'react-router-dom';
import SuggestedPost from './container/SuggestedPost';
import latestPostexample from '../../assets/latestpostexample.png';
function ArticleDetailPage() {
  const postsData=[
    {title:'Help children get better education', image: latestPostexample, date:'Jun 27, 2022'},
    {title:'Help children get better education', image: latestPostexample, date:'Jun 27, 2022'},
    {title:'Help children get better education', image: latestPostexample, date:'Jun 27, 2022'},
    {title:'Help children get better education', image: latestPostexample, date:'Jun 27, 2022'},
    {title:'Help children get better education', image: latestPostexample, date:'Jun 27, 2022'},
   ]

   const tag=[
    {tag:'Medical', link:'/'},
    {tag:'Lifestyle', link:'/'},
    {tag:'Learn', link:'/'},
    {tag:'Healthy', link:'/'},
    {tag:'Food', link:'/'},
    {tag:'Diet', link:'/'},
    {tag:'Education', link:'/'},
   ]
 

  return (
     <MainLayout>
       <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 '>
       <article className='flex-1'>
       <BreadCrumbs data={[
         {link:'/', title:'Home'},
         {link:'/blog', title:'Blog'},
         {link:'/blog/1', title:'Article title'},
        ]}/> 

        <img src={images.cardLaptop} alt="postimag"  className='rounded-xl  w-full ' />
        <Link to="blog?category=selectedCategory" className="text-primery text-sm font-roboto inline-block mt-4 md:text-base " >Eduaction</Link>

        <h1 className='font-medium text-2xl text-hard-dark mt-5 font-roboto md:text-[26px]'>Help children get better education</h1>

       <div className='mt-4 text-soft-dark font-roboto text-base'>
        <p className='leading-7'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. </p>

       </div>
        

        
   
       </article>
       <SuggestedPost posts={postsData} header={"Latest Article"} tags={tag}/>
       </section>
       
     </MainLayout>
  )
}

export default ArticleDetailPage