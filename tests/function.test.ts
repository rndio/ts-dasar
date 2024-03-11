describe('Function', function(){
  it('should support function', function(){
    function sayHello(name: string): string {
      return `Hello ${name}`
    }
    expect(sayHello('rndio')).toBe('Hello rndio');

    function printHello(name: string): void {
      console.info(`Hello ${name}`)
    }
    printHello('rndio');

  })
})