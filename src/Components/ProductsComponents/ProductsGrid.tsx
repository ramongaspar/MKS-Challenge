//componente que realiza o download dos dados da api e retorna um grid com os items presentes

import { useQuery } from "@tanstack/react-query"
import Product from "./Product"
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from "../MotionComponents/Spinner.tsx";
import SmoothAppear from "../MotionComponents/SmoothAppear.tsx";

export interface ProductObject {id:number,name:string,brand:string,description:string,photo:string,price:string,createdAt:string,updatedAt:string}

function ProductsGrid() {
  const fetchApi = async () =>{
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=DESC')
    if(response) return response.json()
    
  }  

  const query = useQuery({queryKey:['products'], queryFn:fetchApi })
  if (query.isLoading) return <div>carregando</div>
  const productsList = query.data.products.map((product:ProductObject) => {
    return(
        <Product key={product.id} product={product}></Product>
    )
  })

  return (
    <div className="products-grid-container">
      <AnimatePresence>
        {query.isLoading ? (
          <SmoothAppear className="">
            <Spinner />
          </SmoothAppear>
  
        ) : (
         <SmoothAppear className="products-grid">
           {productsList}
         </SmoothAppear>
          
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductsGrid