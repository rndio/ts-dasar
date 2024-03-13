describe('loop', function(){
  it('should support for loop', function(){
    const names: string[] = ['rndio', 'joko', 'budi'];
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names){
      console.info(name);
    }

    for (const i in names){
      console.info(names[i]);
    }
  })

  it('should support while loop', function(){
    let counter:number = 0;
    while (counter < 5) {
      console.info(counter);
      counter++;
    }
  })

  it('should support do while loop', function(){
    let counter:number = 0;
    do {
      console.info(counter);
      counter++;
    } while (counter < 5);
  })

  it('should support break statement and continue', function(){
    let counter:number = 0;
    do{
      counter++;
      if (counter === 10) {
        break;
      }

      if (counter % 2 === 0) {
        continue;
      }
      console.info(counter);
    }while(true)
  })

})