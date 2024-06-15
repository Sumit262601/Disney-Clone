import React, { useState, useEffect, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const IMAGE_BASEA_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();

    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight=(element)=> {
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft=(element)=> {
        element.scrollLeft-=screenWidth-110
    }
    return (
        <div>
            <HiChevronLeft className='text-white text-[30px] absolute mx-6 mt-[200px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)} />
            <HiChevronRight className='text-white text-[30px] absolute mx-6 mt-[200px] bg-transparent cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} />


            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={IMAGE_BASEA_URL + item.backdrop_path} alt="MoviesList img" 
                    className='min-w-full md:h-[410px] object-top mr-5 rounded-md hover:border-[2px] border-gray-400 transition-all duration-100 ease-in center ' />
                ))}
            </div>
        </div>
    )
}

export default Slider