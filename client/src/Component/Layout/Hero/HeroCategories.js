import React from 'react';
import './HeroCategories.css'; // Import the CSS for custom styles

const HeroCategories = () => {
  return (
    <>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Vegetable</a></li>
    <li><a class="dropdown-item" href="#">Meat</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</>
  );
};

export default HeroCategories;
