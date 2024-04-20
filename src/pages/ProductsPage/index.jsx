import React, { useEffect } from 'react';
import Filters from './components/Filters';
import { useState } from 'react';
import FilteredItems from './components/FilteredItems';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
const ProductsPage = () => {
  const data = useLoaderData();

  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    setLaptops(data);
    setCPU([]);
    setMonitor([]);
    setStorage([]);
    setRAM([]);
    setPrice([]);
  }, [window.location.pathname]);

  const [monitor, setMonitor] = useState([]);
  const [cpu, setCPU] = useState([]);
  const [ram, setRAM] = useState([]);
  const [storage, setStorage] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setLaptops((prevLaptops) => {
      return data.filter((laptop) => {
        if (
          monitor.length === 0 &&
          storage.length === 0 &&
          ram.length === 0 &&
          cpu.length === 0
        ) {
          return true;
        }

        for (let i = 0; i < monitor.length; i++) {
          if (monitor[i].substring(0, 2) === laptop.screen.substring(0, 2)) {
            return true;
          }
        }

        for (let i = 0; i < storage.length; i++) {
          console.log(storage[i]);
          console.log(laptop.hardDisk);
          if (laptop.hardDisk.startsWith(storage[i])) {
            return true;
          }
        }

        for (let i = 0; i < ram.length; i++) {
          console.log(ram[i]);
          console.log(laptop.ram);
          if (laptop.ram.startsWith(ram[i])) {
            return true;
          }
        }

        for (let i = 0; i < cpu.length; i++) {
          console.log(cpu[i]);
          console.log(laptop.cpu);
          if (laptop.cpu.includes(cpu[i])) {
            return true;
          }
        }

        return false;
      });
    });
  }, [monitor, cpu, storage, price, ram]);

  return (
    <main className="container mt-[30px]">
      <h2 className="text-3xl font-medium ">CHỌN TIÊU CHÍ LỌC</h2>
      <div className="sm:relative flex gap-[10px] mt-[10px] ">
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
            'Ryzen 7',
            'Ryzen 9',
            'M1',
            'M2',
            'M3',
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

      <p className="text-3xl font-bold mt-[20px]">Đang lọc theo:</p>
      <div className="flex gap-[10px] flex-wrap mt-[10px]">
        <FilteredItems name="Màn hình" items={monitor} set={setMonitor} />

        <FilteredItems name="CPU" items={cpu} set={setCPU} />
        <FilteredItems name="RAM" items={ram} set={setRAM} />
        <FilteredItems name="Storage" items={storage} set={setStorage} />
        <FilteredItems name="Giá" items={price} set={setPrice} />
      </div>

      <div className="mt-[20px] grid grid-cols-5 md:grid-cols-2  gap-[10px]">
        {laptops.map((laptop) => (
          <ProductCard product={laptop} />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
