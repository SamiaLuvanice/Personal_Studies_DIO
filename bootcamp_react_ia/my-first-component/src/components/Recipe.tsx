import { CoffeeProps } from '../interfaces/coffee';
import { Coffee } from './Coffee';

export function Recipe(props: CoffeeProps) {
  return (
    <>
      <Coffee {...props} />
    </>
  )
}