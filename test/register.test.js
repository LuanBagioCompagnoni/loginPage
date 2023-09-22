const {hasLowerCase, hasNumber, hasSpecialsChars, hasTheMinimumValue, hasUpperCase} = require('../script/passwordValidator.js');

describe('Test the register of password', () => {
  test('should validate if has lower case', () => {
    expect(hasLowerCase("TESTE@123")).toBeFalsy()
  });   
  test('should validate if has number', () => {
    expect(hasNumber("TESTE@teste@")).toBeFalsy()
  });  
  test('should validate if has special chars', () => {
    expect(hasSpecialsChars("Teste1234Teste")).toBeFalsy()
  });  
  test('should validate if has the minimum of chars', () => {
    expect(hasTheMinimumValue("Teste@1")).toBeFalsy()
  });  
  test('should validate if has upper case', () => {
    expect(hasUpperCase("teste@1234")).toBeFalsy()
  });  

});

