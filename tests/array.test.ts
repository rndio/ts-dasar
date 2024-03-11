describe('Array', function(){
  it('should return array', function(){
    const names: string[] = ['rndio', 'johndoe', 'janedoe'];
    const values: number[] = [1000000, 2000000, 3000000];

    console.info(names, values);
  })

  it('should support readonly array', function(){
    const hobbies: ReadonlyArray<string> = ['swimming', 'running', 'cycling'];
    console.info(hobbies);
  })

  it('should support tuple', function(){
    const person: [string, number, boolean] = ['rndio', 1000000, true];
    console.info(person);
  })
})