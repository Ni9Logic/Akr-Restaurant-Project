import React from "react";
import Image from "next/image";

interface DishProps {
    title: string,
    category: string,
    fullPrice: number,
    halfPrice: number,
    width?: number,
    height?: number,
    image?: any,
}

const Dish: React.FC<DishProps> = ({ title, category, fullPrice, halfPrice, image, width, height }) => {
    return (
        <>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center pb-10">
                    <Image src={image} alt="image" loading="lazy" width={width} height={height} className="w-[200px]"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{category}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-lime-500 rounded-lg">
                            Full {fullPrice} SAR
                        </a>
                        <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-red-500 text-white rounded-lg">
                            Half  {halfPrice} SAR
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dish;