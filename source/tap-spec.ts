import {tap, pipe} from 'rambda'

describe('R.tap', () => {
  it('happy', () => {
    pipe(
      tap(x => {
        x // $ExpectType number[]
        console.log({x})
      }),
      (x: number[]) => x.length
    )([1, 2]) 
  })
})
