export function List() {
  const name = 'Sâmia';


  function formatDate(date: Date): React.ReactNode {
    return new Intl.DateTimeFormat(
      'pt-BR',
      { weekday: 'long' }
    ).format(date);
  }

  return (
    <>
      <h2>Lista de Compras da {name}</h2>
      <p><b>Dia da Feira:</b> {formatDate(new Date())}</p>

      <ul className="list">
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Macarrão</li>
      </ul>
    </>
  );
}
