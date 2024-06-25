import React from 'react'
import { Card, Filter, Navbar } from "../../pages/index"
import { listData } from '../../lib/Data';

const ProductList = () => {

  const data = listData;

  return (
    <section>
      <Navbar />
      <section className="border-t border-[#e0e0e0]">
        <main className="max-w-[95%] mx-auto ">
          <section className="flex">
            {/* list container */}
            <div className="flex-[3] h-100% overflow-hidden">
              {/* list-wrapper */}
              <div className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll">
                <Filter />
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
            {/* map container */}
            <div className="flex-[2]">Map</div>
          </section>
        </main>
      </section>
    </section>
  );
}

export default ProductList