import { ListProduct } from './styles'
import { CardItem } from '../CardItem'
import { useFetch } from '../../Services/useFetch'
import { useState } from 'react';


interface Repository {
  code:string,
  status:string,
  product_name:string,
  image_url:string,
  ingredients_text:string,
  quantity: string,
  url: string,
}

export default function index() {

  const { data: repositories, isFetching } = useFetch<Repository[]>('http://localhost:3000/products');


  return (
    <ListProduct>
      {isFetching && <p>Loading...</p>}
     {repositories?.map(repo =>{
         return (
        <CardItem key={repo.code} card={repo} />
        )
      })}
      </ListProduct>

  )
    }
  
  
