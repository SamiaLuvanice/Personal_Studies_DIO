import { CoffeeProps } from '../interfaces/coffee';

export function Coffee({ imageSrc, coffee, imageSize = 170 }: CoffeeProps) {
return (
    <>
      <img
        src={imageSrc}
        alt={coffee.name}
        width={imageSize}
        height={imageSize}
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