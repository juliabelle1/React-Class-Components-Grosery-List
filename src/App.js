import image from './man.jpg';
import imageTwo from './shopping.jpg'
import './App.css';
import GroceryList from './GroceryList';

function App() {
  return (
    <div className="App">
      <img src= { imageTwo } width='250px' alt="shopping" />
      <h1>Grocery list</h1>
      <GroceryList/>
      <img src= { image } width='250px' alt="man" />

  
    </div>
  );
}

export default App;
