import {mapToObjectAsync} from 'rambda'

interface Output{
  key1: string
  key2: string
  key3: string
}

const list = [ 1, 2, 3, 12 ]
const fn = async (x: number) => {
  if(x>10) return false

  return x % 2 ? { [ `key${x}` ] : x + 1 } : { [ `key${x}` ] : x + 10 }
}

describe('R.mapToObjectAsync', () => {
  it('happy', async () => {
  const result = await mapToObjectAsync<number, Output>(fn, list)
    result // $ExpectType Output
  })
})
