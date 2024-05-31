import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();
  response.status(200).json(products);
}

/* - Create the file structure `pages/api/products/index.js`.
- Switch to `/api/products/index.js`; import the `getAllProducts` function from `/services/productServices.js`.
- Write a handler function which responds
  - with a `200` status code and
  - with the return value of `getAllProducts`, parsed with the `.json()` method. */
