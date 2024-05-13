const usuario = require('./piedra-pepel-tijera');

test('Piedra en usuario 1', () => {
    expect(usuario('piedra','piedra')).toBeFalsy();
    expect(usuario('piedra','papel')).toBeFalsy();
    expect(usuario('piedra','tijeras')).toBeTruthy();
});

test('Papel en usuario 1', () => {
    expect(usuario('papel','piedra')).toBeTruthy();
    expect(usuario('papel','papel')).toBeFalsy();
    expect(usuario('papel','tijeras')).toBeFalsy();
});

test('Tijera en usuario 1', () => {
    expect(usuario('tijeras','piedra')).toBeFalsy();
    expect(usuario('tijeras','papel')).toBeTruthy();
    expect(usuario('tijeras','tijeras')).toBeFalsy();
});