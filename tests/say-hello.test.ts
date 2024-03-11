import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
  it('should return Hello Rendio!', (): void => {
    const name = 'Hello World!';
    expect(sayHello('Rendio')).toBe('Hello Rendio');
  });
});