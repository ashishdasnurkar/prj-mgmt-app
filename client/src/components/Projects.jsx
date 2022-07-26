import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return <div>Projects</div>;
}
