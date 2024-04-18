import React from 'react';
import Filters from './components/Filters';
import { useState } from 'react';
import FilteredItems from './components/FilteredItems';
const ProductsPage = () => {
  const [monitor, setMonitor] = useState([]);
  const [cpu, setCPU] = useState([]);
  const [ram, setRAM] = useState([]);
  const [storage, setStorage] = useState([]);
  const [price, setPrice] = useState([]);

  return (
    <main className="container">
      <h2 className="text-3xl font-medium">CHỌN TIÊU CHÍ LỌC</h2>
      <div className="flex gap-[10px]">
        <Filters
          name="Màn hình"
          options={[
            '10 inch',
            '12 inch',
            '13 inch',
            '14 inch',
            '15 inch',
            '16 inch',
          ]}
          filteredItems={monitor}
          set={setMonitor}
        />
        <Filters
          name="CPU"
          options={[
            'Ultra 5',
            'Ultra 7',
            'Intel Pentium',
            'Core M',
            'Core i3',
            'Core i5',
            'Core i7',
            'Ryzen 5',
          ]}
          filteredItems={cpu}
          set={setCPU}
        />
        <Filters
          name="RAM"
          options={['4GB', '8GB', '16GB', '32GB', '64GB']}
          filteredItems={ram}
          set={setRAM}
        />
        <Filters
          name="Storage"
          options={['64GB', '128GB', '256GB', '512GB', '1TB', '2TB']}
          filteredItems={storage}
          set={setStorage}
        />
        <Filters
          name="Giá"
          options={[
            '< 20tr',
            '20tr - 30tr',
            '30tr - 40tr',
            '40tr - 60tr',
            '> 60',
          ]}
          filteredItems={price}
          set={setPrice}
        />
      </div>

      <p className="text-3xl font-bold">Đang lọc theo:</p>
      <div className="flex gap-[10px] flex-wrap">
        <FilteredItems name="Màn hình" items={monitor} set={setMonitor} />

        <FilteredItems name="CPU" items={cpu} set={setCPU} />
        <FilteredItems name="RAM" items={ram} set={setRAM} />
        <FilteredItems name="Storage" items={storage} set={setStorage} />
        <FilteredItems name="Giá" items={price} set={setPrice} />
      </div>
    </main>
  );
};

export default ProductsPage;
