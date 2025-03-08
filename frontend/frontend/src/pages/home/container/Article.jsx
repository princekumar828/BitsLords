import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { GrLinkNext } from "react-icons/gr";

function Article() {
  return (
    <section className='container flex flex-col  mx-auto  px-5 py-10 '>
        <div className='flex flex-wrap md:gap-x-5 md:gap-y-5 pb-10 '>
        
        <ArticleCard className={" w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}/>
        <ArticleCard className={" w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}/>
        <ArticleCard className={" w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}/>
        </div>
        <button className=' mx-auto border-2 border-primery rounded-lg py-3  text-primery px-6 flex font-bold items-center justify-center gap-x-2 w-max'>
            <span className=''>More  article</span>
            <GrLinkNext className='w-3 h-3' />
        </button>
        </section>

  )
}

export default Article