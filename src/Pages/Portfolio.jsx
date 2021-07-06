import React, { useState } from 'react';
import dados from '../Data/Portfolio';
import Categories from '../Component/Categories';
import PortCard from '../Component/PortCards';

import '../Style/Portfolio.css';

const allCategories = ['All', ...new Set(dados.map(item => item.category))]

function Portfolio() {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);
  const [items, setItems] = useState(dados);

  const filter = (category) => {

    if (category === 'All') {
      setItems(dados);
      return;
    }
    const filteredData = dados.filter((item) => item.category === category);
    setItems(filteredData);
  }

  return (
    <div className='Portfolio'>
      <div className="title">
        <h1>PortFólio</h1>
      </div>
      <div className="portfolio-data">
        <Categories filter={filter} categories={categories} />
        <PortCard menuItem={ items } />
      </div>
    </div>
  );
}

export default Portfolio;
