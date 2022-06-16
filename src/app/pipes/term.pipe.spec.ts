import { TermPipe } from './term.pipe';

describe('TermPipe', () => {
  const pipe = new TermPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform method should transform input value from seconds to months/days and return it', () => {
    expect(pipe.transform(864000)).toEqual('10 days');
    expect(pipe.transform(3000000)).toEqual('1 month 5 days');
  });
});
