import { Customer, CustomerType } from "../src/enum";

describe('Enum', function(){
  it('should return enum', function(){
    const customer: Customer = {
      id: 1,
      name: 'rndio',
      type: CustomerType.GOLD
    };

    console.info(customer);
  });
});