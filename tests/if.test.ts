describe('If Statement', function(){
  it('should support if statement', function(){
    const examValue = 80;

    if (examValue > 90) {
      console.info('A');
    } else if (examValue > 80) {
      console.info('B');
    } else if (examValue > 70) {
      console.info('C');
    } else {
      console.info('D');
    }
  })

  it('should support ternary operator', function(){
    const examValue = 80;
    const result = examValue >= 70 ? 'Congratulation' : 'Try Again';
    expect(result).toBe('Congratulation');
  })

  it('should support switch statement', function(){
    function sayHello(name: string): string {
      switch(name) {
        case 'rndio':
          return 'Hello rndio';
        case 'world':
          return 'Hello world';
        default:
          return 'Hello';
      }
    }

    expect(sayHello('rndio')).toBe('Hello rndio');
    expect(sayHello('world')).toBe('Hello world');
    expect(sayHello('joko')).toBe('Hello');
  })

})