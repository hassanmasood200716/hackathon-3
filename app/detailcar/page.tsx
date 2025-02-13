
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { CategorySelectorComponent } from "../components/categoryselector";
import SecondMain from "../components/SecondMain";
import Link from "next/link";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "../components/ProductView";



const DetailCar =async () => {
    const categories = await getAllCategories();
        const products = await getAllProducts();
    return (
        <div className="flex ">
            <div className="w-1/5 lg:block hidden h-screen ">
                <div className="flex flex-col gap-2 items-start gap-y-6 p-10 ">
                    <p className="text-[#90A3BF]">
                        TYPE
                    </p>
                    <CategorySelectorComponent categories={categories}/>
                </div>
            </div>
            <div className="py-10 px-5 bg-[#F6F7F9]">
                <SecondMain ></SecondMain>
                <ProductsView products={products} categories={categories} />
            </div>
        </div>
    );
};

export default DetailCar;
