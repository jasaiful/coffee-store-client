import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-20'>

      <h1 className='text-4xl font-bold text-center text-purple-600'> Hot Hot Total Coffee: {coffees.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full pt-10  gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          > </CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
