import React, { useState } from "react"

export function Sort() {
    const [brands, setBrands] = useState([]);
    const handleSort = (value) => {
        const name = value.split(' ')[0];
        const type = value.split(' ')[1];
        console.log(value)

        const sortBrands = [...brands];

        sortBrands.sort((a, b) => {
      if (name === 'id') {
        return type === 'asc' ? a.id - b.id : b.id - a.id;
      }

      return type === 'asc'
        ? ('' + a[name]).localeCompare(b[name])
        : ('' + b[name]).localeCompare(a[name]);
    });

    setBrands(sortBrands);
    }

    return (
        <select
          defaultValue=""
          onChange={(e) => handleSort(e.target.value)}
          className="px-2 py-1 rounded-md ml-2 text-black"
        >
          <option value="brands asc">Old to new</option>
          <option value="brands desc">New to old</option>
          <option value="price asc">Price high to low</option>
          <option value="price desc">Price high to low</option>
        </select>
    )
}
