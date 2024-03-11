describe('Union Type', function(){
  it('should return union', function(){
    let id: string | number;

    id = 'rndio';
    console.info(id);

    id = 1000000;
    console.info(id);
  })

  it('should support typeof operator', function(){

    function process(value: number | string | boolean){
      if (typeof value === 'number'){
        return value + 2;
      } else if (typeof value === 'string'){
        return value.toUpperCase();
      } else {
        return !value;
      }
    }

    expect(process(2)).toBe(4);
    expect(process('rndio')).toBe('RNDIO');
    expect(process(true)).toBe(false);
  });
});