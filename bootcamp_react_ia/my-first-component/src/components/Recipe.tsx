
interface Props {
  imageSrc: string;
  coffee: {
    name: string;
    description: string;
    preparationTime: string;
  }
}

export function Recipe({ imageSrc, coffee }: Props) {
  return (

    <>
      <img
        src={imageSrc}
        alt={coffee.name}
        width={170}
      />
      <h2 className='recipe-title'>{coffee.name}</h2>
      <p className='recipe-description'>
        {coffee.description}
      </p>
      {coffee.preparationTime && (
        <p className='recipe-prep-time'> <b>Tempo de Preparo</b>: {coffee.preparationTime}</p>
      )}

    </>
  )
}