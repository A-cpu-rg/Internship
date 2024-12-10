import React, { useState, useEffect } from "react";

const Subnavbar = () => {
  const [categories, setCategories] = useState([]); 
  const [activeDropdown, setActiveDropdown] = useState(null); 

  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
      {
        headers: { projectId: "bng7dtu7whwk" }, 
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setCategories(data.data); 
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <div className="bg-blue-600">
      <nav className="flex justify-center">
        <ul className="flex space-x-4 p-0 m-0 list-none">
          {categories.map((category) => (
            <li
              key={category}
              className="text-white px-2 py-1 text-center relative"
            >
              <span onClick={() => handleDropdown(category)}>{category}</span>
              {activeDropdown === category && (
                <ul className="absolute top-full left-0 bg-white text-black shadow-md p-2">
                  <li>{category} 1</li>
                  <li>{category} 2</li>
                  <li>{category} 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Subnavbar;
