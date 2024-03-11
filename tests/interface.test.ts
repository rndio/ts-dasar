import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller"

describe('Interface', function(){
  it('should support in typescript', function(){
    const seller: Seller = {
      id: 1,
      name: 'Toko Aseng',
      nib: '10000000',
      npwp: '1234567890'
    }

    seller.name = 'Toko Aseng';
    // seller.nib = '10000000'; // Error

    console.info(seller)
  })

  it('should support function interface', function(){
    interface AddFunction{
      (a: number, b: number): number;
    }

    const add: AddFunction = (a:number, b:number):number => {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  })

  it('should support indexable interface', function(){
    interface StringArray{
      [index: number]: string;
    }

    const names: StringArray = ['rndio', 'johndoe', 'janedoe'];
    console.info(names)
  })

  it('should support indexable interface for non number index', function(){
     interface StringDictionary {
      [key: string]: string;
     }

     const dictionary : StringDictionary = {
       name: 'rndio',
       age: '10'
     }

     expect(dictionary.name).toBe('rndio');
     expect(dictionary.age).toBe('10');
    })

    it('should support extend interface', function(){
      const employee: Employee = {
        id: '1',
        name: 'rndio',
        division: 'IT'
      }
      console.info(employee)

      const manager: Manager = {
        id: '2',
        name: 'johndoe',
        division: 'IT',
        numberOfEmployees: 10
      }
      console.info(manager)
    })

    it('should support function in interface', function(){
      const person: Person = {
        name: 'rndio',
        sayHello: function(name: string):string{
          return `Hello ${name}, my name is ${this.name}`;
        }
      }
    })

    it('should support intersection types', function(){
      interface HasName{
        name: string
      }

      interface HasId{
        id: string
      }

      type Domain = HasName & HasId;
      const domain: Domain = {
        id: 'id',
        name: 'rndio'
      };
    })

    it('should support type assertions', function(){
      const person: any = {
        name: 'rndio',
        age: 30
      }

      const person2 : Person = person as Person;
      person2.sayHello('johndoe');
      console.info(person2)
    })
})