import { useParams } from "react-router-dom"

export default function AllProducts(){
  const {keyword}= useParams();

  return <div>All Products {keyword}</div>
}