import { convertToURLFriendly } from "@utils/conversion";
import { Link } from "react-router-dom";

interface MoviePosterProps {
  poster_path: string;
  title: string;
}

export default function MoviePoster({ poster_path, title }: MoviePosterProps) {
  const width = 342;
  const SRC = `https://image.tmdb.org/t/p/w${width}${poster_path}`;
  return (
    <>
      <Link
        to={`/${convertToURLFriendly(title)}`}
        className={`rounded shadow ring-1 ring-white w-[${width}px]`}
      >
        {poster_path && <img src={SRC} alt={title} className="rounded" />}
        {!poster_path && (
          <div className="w-full h-full p-4 bg-gray-700">
            <p className="capitalize text-xl">{title}</p>
          </div>
        )}
      </Link>
    </>
  );
}
