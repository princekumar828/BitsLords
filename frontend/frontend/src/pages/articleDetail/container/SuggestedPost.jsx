import React from 'react'

function SuggestedPost({className , header , posts ,tags=[{tag:'Education', link:'/'}, {tag:'Children', link:'/'}, {tag:'Help', link:'/'}]}) {
 
 
 
 
    return (
    <div className={`w-full shadow-xl p-4  mt-4 rounded-lg ${className} ` }>
      <h2 className='text-hard-dark text-xl font-medium  font-roboto md:text-xl '>{header}</h2>
      <div className='grid gap-y-5 mt-4 md:grid-col-2 md:gap-x-5'>
      {posts.map((post, index) => (
        <div key={index} className='flex space-x-3  flex-nowrap items-center'>
          <img src={post.image} alt="post" className='w-1/5  aspect-square rounded-lg object-cover' />
          <div className='text-hard-dark font-medium font-sm font-roboto '>
            <h3 className='md:text-base '>{post.title}</h3>
            <p className='text-hard-dark/50'>{post.date}</p>
          </div>
        </div>
      ))}
       </div>

      <h2 className='font-bold text-hard-dark mt-4 flex flex-wrap gap-x-3 gap-y-2'>Tages</h2>
      <div className='flex flex-wrap  gap-3 mt-4 '>
        {tags.map((tag, index) => (
          <span key={index} className='bg-primery text-white px-4 py-2 rounded-xl text-sm'>{tag.tag}</span>
        ))}
      </div>

    </div>
  )
}

export default SuggestedPost