import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import BlackFridayBanner from "../../components/BlackFridayBanner";
// import ProductsView from './../../components/ProductsView';

  
export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();


  return (
    <div>
      {/* <h1>Hello all </h1> */}
      <BlackFridayBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>

      <Button>Click me</Button>
    </div>
  );
}
