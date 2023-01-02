import React from 'react';
import Image from "next/image";
import Title from '../../components/ui/Title';

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_389px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_389px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 ">Ürünler</th>
                      <th scope="col" className="py-3 px-6 ">Ekstralar</th>
                      <th scope="col" className="py-3 px-6 ">Fiyat</th>
                      <th scope="col" className="py-3 px-6 ">Miktar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                          <Image src="/images/f1.png" alt="" width={40} height={40}/>
                          <span>Good Pizza</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <span>mayonez,keçap,hardal</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">20$</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_389px)] flex flex-col justify-center text-white p-12 md:w-auto w-full md:text-start !text-center">
            <Title addClass="text-[40px]">Sepet Toplam</Title>
            <div className="mt-6">
                <b>İndirimsiz Toplam: </b>$20 <br/>
                <b className="inline-block my-1">İndirim miktarı: </b>$0.00<br/>
                <b>Toplam: </b>$20<br/>
            </div>
            <div>
                <button className="btn-primary mt-4 md:w-auto w-52">Sİparişi Onayla</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart