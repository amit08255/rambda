import {identical} from 'rambda'

describe('R.identical', () => {
  it('happy', () => {
    const result = identical(4, 1)
    const curriedResult = identical(4)(1)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
  it('with object', () => {
    const result = identical({a: 1}, {b: 2})
    result // $ExpectType boolean
  })
})

/*
    in curried version Typescript correctly catch errors
    but it doesn't do so in the standart definition
    
    identical({a:1},{b:2})
    identical({a:1})({b:2})
*/
