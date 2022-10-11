import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient, { error }] = useMutation(DELETE_CLIENT);

  if (error) return <p>Not deleted. Try Again!</p>;
  const handleClick = (e) => {
    e.preventDefault();
    deleteClient({
      variables: {
        id: client.id,
      },
      refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    });
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={(e) => handleClick(e)}>
          <FaTrash id="trash-btn" />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
