import { useQuery, useQueryClient } from "@tanstack/react-query"
import Product from "./Product"

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
    <div className="products-grid">
        {productsList}
    </div>
  )
}

export default ProductsGrid