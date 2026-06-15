interface ListDetails {
  name: string;
  day: React.ReactNode;
}

export function List() {
  const listDetails: ListDetails = {
    name: 'Sâmia Luvanice',
    day: formatDate(new Date())
  };


  function formatDate(date: Date): React.ReactNode {
    return new Intl.DateTimeFormat(
      'pt-BR',
      { weekday: 'long' }
    ).format(date);
  }

  return (
    <>
      <h2>Lista de Compras da {listDetails.name}</h2>
      <p><b>Dia da Feira:</b> {listDetails.day}</p>

      <ul className="list" style={{ color: 'pink', backgroundColor: 'black', textAlign: 'left' }}>
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Macarrão</li>
      </ul>
    </>
  );
}
