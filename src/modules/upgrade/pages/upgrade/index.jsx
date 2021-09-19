import { Layout } from "antd";
import React from "react";

const Upgrade = () => {
  return (
    <Layout className="flex items-center justify-center h-full space-y-20">
      <div className="text-5xl font-bold">ImgBB Pro account</div>
      <div className="flex space-x-10">
        <div className="w-[300px] min-h-[500px] bg-white shadow relative">
          <div className="w-full h-3 bg-blue-500"></div>
          <div className="px-3 py-6 space-y-6 text-center">
            <div className="text-lg font-light uppercase">3 Year Pro</div>
            <div>
              <div className="font-semibold text-7xl first-letter:text-2xl">
                $2.99
              </div>
              <div>BILLED $107.64</div>
            </div>

            <button className="px-16 py-3 tracking-widest text-white uppercase bg-red-500 rounded-sm">
              Upgrade
            </button>
          </div>
          <div className="px-3 py-6">
            <div className="divide-y divide-gray-400 ">
              {[...Array(5)].map(() => (
                <div className="py-3">No Ads</div>
              ))}
            </div>
            <a href="d">API Access</a>
          </div>
          <div className="absolute overflow-hidden text-right -top-1 -right-1 w-[200px] h-[100px]">
            <div className="relative inline-block py-2 text-center rotate-45 w-[140px] top-4 -right-8 bg-red-500 text-white shadow after:absolute after:bottom-[-3px] after:border-t-[3px] after:border-red-500">
              70% OFF
            </div>
          </div>
        </div>
        <div className="w-[300px] min-h-[500px] bg-gray-400"></div>
        <div className="w-[300px] min-h-[500px] bg-gray-400"></div>
      </div>
    </Layout>
  );
};

export default Upgrade;
