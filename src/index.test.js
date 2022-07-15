const { add } = require('./index')

test('two plus three shoud equal five', ()=>{
    expect(add(2, 3)).toBe(5);
});