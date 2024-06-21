
"use client";
import courseData from '../data/musiccourses.json'
import { Button } from './ui/moving-border'
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

export default function Featuredsection() {

const featuredcourse  = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
    <div>
      <div className='text-center'>
          <h2 className=" text-xl text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
      </div>
    </div>
    <div className='mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between'>
         {
          featuredcourse.map((course:Course) => {
              return (
                  <div className='flex p-3 sm:p-1 justify-center' key={course.id}>
                      <BackgroundGradient className="flex  flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                          <div className="p-4 sm:p-6 flex flex-col items-center text-center text-white flex-grow">
                              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                              <Link href={`/courses/${course.slug}`}>
                                <button className='mt-5 rounded-lg bg-gradient-to-r from-indigo-500 ... p-3'>Learn More</button>
                              </Link>
                          </div>
                      </BackgroundGradient>
                  </div>
              )
          })
         }
      </div>

    </div>
    <div className='mt-20 text-center'>
    <Link href={'/courses'}>
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      View all Courses
    </Button>
    </Link>
    </div>
  </div>
  )
}




// import { motion } from "framer-motion";
// import React from "react";
// import { AuroraBackground } from "./ui/aurora-background";
// import Link from 'next/link';
// import { BackgroundGradient } from './ui/background-gradient';

// interface Course{
//     id: number,
//     title: string,
//     slug: string,
//     description: string,
//     price: number,
//     instructor: string,
//     isFeatured: boolean,

// }

// export function AuroraBackgroundDemo() {

//    const featuredcourse  = courseData.courses.filter((course:Course) => course.isFeatured)

//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className=" sm:relative flex flex-col gap-4 justify-center items-center px-4"
//       >
//        <div className='py-12'>
//       <div>
//         <div className='text-center'>
//             <h2 className=" text-xl text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
//         </div>
//       </div>
//       <div className='mt-10'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between'>
//            {
//             featuredcourse.map((course:Course) => {
//                 return (
//                     <div className='flex justify-center' key={course.id}>
//                         <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
//                             <div className="p-4 sm:p-6 flex flex-col items-center text-center text-white flex-grow">
//                                 <p>{course.title}</p>
//                                 <p>{course.description}</p>
//                                 <Link href={`/courses/${course.slug}`}>
//                                   <button className='mt-5 rounded-lg bg-gradient-to-r from-indigo-500 ... p-3'>Learn More</button>
//                                 </Link>
//                             </div>
//                         </BackgroundGradient>
//                     </div>
//                 )
//             })
//            }
//         </div>

//       </div>
//       <div className='mt-20 text-center'>
//       <Link href={'/courses'}>
//       <Button
//         borderRadius="1.75rem"
//         className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
//       >
//         View all Courses
//       </Button>
//       </Link>
//       </div>
//     </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }

