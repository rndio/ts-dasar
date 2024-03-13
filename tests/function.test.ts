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


  it('should support default value', function(){
    function sayHello(name: string = 'rndio'): string {
      return `Hello ${name}`
    };
    expect(sayHello()).toBe('Hello rndio');
    expect(sayHello('world')).toBe('Hello world');
  })

  it('should support rest parameter', function(){
    function sum(...numbers: number[]): number {
      let result = 0;
      numbers.forEach(n => result += n);
      return result;
    }
    expect(sum(1, 2, 3)).toBe(6);
  })

  it('should support optional parameter', function(){
    function sayHello(firstName: string, lastName?: string): string {
      return `Hello ${firstName}${lastName ? ' ' + lastName : ''}`;
    }

    expect(sayHello('rndio')).toBe('Hello rndio');
    expect(sayHello('rndio', 'park')).toBe('Hello rndio park');
  })

  it('should support function overloading', function(){
    function double(value: string): string;
    function double(value: number): number;
    function double(value: any): any {
      if (typeof value === 'string') {
        return value + value;
      } else {
        return value * 2;
      }
    }

    expect(double('rndio')).toBe('rndiorndio');
    expect(double(3)).toBe(6);
  })

  it('should support function as parameter', function(){
    function sayHello(name:string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function upperCase(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('rndio', upperCase)).toBe('Hello RNDIO');
    expect(sayHello('rndio', (name) => name.toLowerCase())).toBe('Hello rndio');
  })

})