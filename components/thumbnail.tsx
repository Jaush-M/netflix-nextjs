import Image from 'next/image'
import { movieImageSizes } from '../constants/movie'
import { Movie, TrendingMovie } from '../interfaces/movie.interface'

interface ThumbnailProps {
  movie: Movie | TrendingMovie
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[280px] md:hover:scale-105">
      <Image
        src={`${movieImageSizes.thumbnail}${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  )
}

export default Thumbnail
