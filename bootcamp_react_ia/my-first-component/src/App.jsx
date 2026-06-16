import './App.css'
import { Recipe } from './components/Recipe'
import IcedCaramelImage from './assets/recipes/iced-caramel.png'
import CafeMochaImage from './assets/recipes/caffe-mocha.png'

function App() {
  return (
    <>
    <h1 className='title'>Receitas Starbucks</h1>
      <Recipe 
        imageSrc={IcedCaramelImage} 
        coffee={{ 
          name: "Iced Caramel", 
          description: "A delicious iced caramel drink that combines the rich flavors of caramel with the refreshing chill of ice. Perfect for a hot day or as a sweet treat any time.",
          preparationTime: "5 minutes"
        }} />
      <Recipe imageSrc={CafeMochaImage} coffee={{ 
        name: "Caffe Mocha", 
        description: "A delightful blend of espresso, steamed milk, and rich chocolate flavor. Topped with whipped cream for an extra indulgent touch.",
        preparationTime: "10 minutes"
      }} />
    </>
  )
}

export default App
