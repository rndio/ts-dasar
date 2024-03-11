import { Category, Product } from "../src/type-alias"

describe('Type Alias', function(){
  it('should return type alias', function(){
    const category: Category = {
      id: '1',
      name: 'Electronics',
    }

    const product: Product = {
      id: '1',
      name: 'Laptop',
      price: 10000000,
      category: category
    }

    console.info(product, category);
  })
})
