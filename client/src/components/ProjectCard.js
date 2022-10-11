const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h5>{project.name}</h5>
      <a href={`/projects/${project.id}`}>View</a>
      <p>
        Status: <strong>{project.status}</strong>
      </p>
    </div>
  );
};

export default ProjectCard;
