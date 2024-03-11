import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { movieName } = useParams();

  return (
    <>
      <h1>{movieName}</h1>
      <div>MovieDetailPage</div>
    </>
  );
}
