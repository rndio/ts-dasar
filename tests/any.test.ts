describe('Any', function(){
  it('should return any', function(){
    const person:any = {
      id: 1,
      name: 'rndio',
      age: 1000000,
    }

    person.age = 31;
    person.address = 'Jakarta';

    console.info(person);
  })
})