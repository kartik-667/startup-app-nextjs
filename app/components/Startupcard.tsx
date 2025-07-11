import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import {EyeIcon} from 'lucide-react'
import Image from 'next/image'

function Startupcard({post}) {
  return (
    <li>
        <div className="startup-card">
            <div className='flex justify-between items-center  '>
                <p className='startup-card_date'>
                    {formatDate(post._createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='text-pink-500'></EyeIcon>
                    <p>{post.views}</p>
                </div>

            </div>

            <div className='flex '>
                <div className='flex-1'>
                    <Link href={`/user/${post.author._id}`}>
                        <p>{post.author.name}</p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                    <h3 className='font-semibold text-3xl'>{post.title}</h3>
                    </Link>

                </div>
                
                <Image src="https://placehold.co/48x48" alt="image here" height={48} width={48} className='rounded-full' ></Image>

                <Link href={`/startup/${post._id}`}>
                    <p>
                        {post.description}
                    </p>
                </Link>


            </div>
        </div>


    </li>
  )
}

export default Startupcard
