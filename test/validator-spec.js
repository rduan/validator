// var assert = require('assert');
var sinon = require('sinon');
var chai = require('chai')
var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);


const validator = require('./../lib/validator');

// describe('Be to Mocha', ()=>{
//   it('with a fail test', ()=>{
//     assert(false, 'hwll');
//     // assert(true, 'hwll');
//   })
// })
describe('Be to Mocha', ()=>{
  it('with a fail test', ()=>{
    expect('hwll').to.be.ok;
    // expect('hwll').to.be.false;
  })
})

describe('A Validator', ()=>{
  it('should return error when nonpositive', ()=>{
    expect(validator(0)).to.deep.include('error.nonpositive');
    expect(validator(0)).to.include('error.nonpositive');
    // expect(validator(0)).to.deep.equal(['error.nonpositive']);
  });
});