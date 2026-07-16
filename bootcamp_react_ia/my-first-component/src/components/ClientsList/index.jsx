import withDataFetching from "../DataFetchingClassComponent";

const ClientsList = ({ data: clients }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ul className="list">
        {clients.map((client) => (
          <li key={client.id}>
            <p>
              #{client.id} - {client.name}
            </p>
            <p>{client.sex}</p>
            <p>
              {Intl.DateTimeFormat("en-US").format(new Date(client.birthday))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ClientsListWithData = withDataFetching(
  "Clients",
  ClientsList,
  "https://api.example.com/clients",
);

export default ClientsListWithData;
