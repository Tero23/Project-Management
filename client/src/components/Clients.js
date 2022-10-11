import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went Wrong</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow client={client} key={client.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
