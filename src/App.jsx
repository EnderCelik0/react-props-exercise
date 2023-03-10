import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card key={item.id} item={item} />) 
  });

  return (
    <div className='App'>
      <Navbar />
      <section className='card-list'>{cards}</section>
    </div>
  );
}
