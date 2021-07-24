import React, {useState} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import People from './People';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
    
  return (
  <section className="section">
  <div className="title">
  <h2>
  <span>/</span>reviews
  </h2>
  </div>
  <div className="section-center">
  {people.map((person, personIndex) => {
        return <People key={person.id} {...person}></People>
  })}
  <button className="prev">
    <FiChevronLeft />
  </button>
  <button className="next">
    <FiChevronRight />
  </button>
  </div>
  </section> 
  );
}

export default App;
