const {hasLowerCase, hasNumber, hasSpecialsChars, hasTheMinimumValue, hasUpperCase} = require('../script/passwordValidator.js');

describe('Test the register of password', () => {
  it('should validate if has lower case', () => {
    expect(hasLowerCase("TESTE@123")).ToBe(false)
  });   
  it('should validate if has number', () => {
    expect(hasNumber("TESTE@teste@")).ToBe(false)
  });  
  it('should validate if has special chars', () => {
    expect(hasSpecialsChars("Teste1234Teste")).ToBe(false)
  });  
  it('should validate if has the minimum of chars', () => {
    expect(hasTheMinimumValue("Teste@1")).ToBe(false)
  });  
  it('should validate if has upper case', () => {
    expect(hasUpperCase("teste@1234")).ToBe(false)
  });  

});

