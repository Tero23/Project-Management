import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  return (
    <>
      <div className="project-page">
        <Link to="/">Back</Link>
        <h1>{data.project.name}</h1>
        <p>{data.project.description}</p>
        <h5>Project Status: </h5>
        <p>{data.project.status}</p>
        <ClientInfo client={data.project.client} />
        <EditProjectForm project={data.project} />
        <DeleteProjectButton projectId={data.project.id} />
      </div>
    </>
  );
};

export default Project;
