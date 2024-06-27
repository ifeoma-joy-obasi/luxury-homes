import React from 'react'
import { Card, Filter,Map } from "../../pages/index"
import { listData } from '../../lib/Data';

const ProductList = () => {

  const data = listData;

  return (
    <section>
      <section className="border-t border-[#e0e0e0] min-h-full">
        <main className="max-w-[95%] mx-auto ">
          <section className="flex flex-col lg:flex-row h-[100%]">
            {/* list container */}
            <div className="flex-[3] h-[100%] overflow-hidden">
              {/* list-wrapper */}
              <div className="lg:pr-[50px] flex flex-col gap-[50px] lg:overflow-y-scroll  lg:h-[calc(100vh-var(--navbar-height))] pb-[50px] ">
                <Filter />
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
            {/* map container */}
            <div className="flex-[2] min-h-full max-w-full rounded-xl">
              <Map items={data} />
            </div>
          </section>
        </main>
      </section>
    </section>
  );
}

export default ProductList