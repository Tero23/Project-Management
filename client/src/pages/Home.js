import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
  return (
    <>
      <AddClientModal />
      <AddProjectModal />
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
