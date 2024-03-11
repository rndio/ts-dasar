describe('object', function(){
  it('should return object', function(){

    const person: {id: number, name: string, hobbies?: string[]} = {
      id: 1,
      name: 'rndio'
    }

    console.info(person);
  });
});
