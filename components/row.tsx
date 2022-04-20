import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState } from 'react'
import { Movie } from '../interfaces/movie.interface'
import Thumbnail from './thumbnail'

interface RowProps {
  title: string
  movies: Movie[]
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (rowRef.current) {
        const { scrollLeft, clientWidth } = rowRef.current
        if (scrollLeft > 0) {
          setAtStart(false)
        } else {
          setAtStart(true)
        }

        if (scrollLeft >= 5806 - clientWidth) {
          setAtEnd(true)
        } else {
          setAtEnd(false)
        }
      }
    }

    if (rowRef.current) {
      rowRef.current.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100${
            atStart ? ' hidden' : ''
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100${
            atEnd ? ' hidden' : ''
          }`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
