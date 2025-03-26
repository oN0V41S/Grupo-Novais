'use client';
import React, { useState } from "react";
import {ProductInterface} from "@/interfaces/product.dto";
import {Button} from "@heroui/button";
import { AiOutlinePlus } from "react-icons/ai";

export default function Products(){
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className='mt-[1vh] w-[80%] m-auto'>
            <button type="button" className="flex items-center bg-green-700 px-4 py-1 rounded-lg w-max text-[14px] gap-1">
                <AiOutlinePlus size={18}/>
                <h3>Add Product</h3>
            </button>
        </div>
    );
}