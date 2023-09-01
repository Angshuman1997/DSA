// Bitwise AND (&)
const andResult = 5 & 3; // result is 1 (binary: 101 & 011 = 001)
console.log(`Bitwise AND: ${andResult}`);

// Bitwise OR (|)
const orResult = 5 | 3; // result is 7 (binary: 101 | 011 = 111)
console.log(`Bitwise OR: ${orResult}`);

// Bitwise XOR (^)
const xorResult = 5 ^ 3; // result is 6 (binary: 101 ^ 011 = 110)
console.log(`Bitwise XOR: ${xorResult}`);

// Bitwise NOT (~)
const notResult = ~5; // result is -6 (binary: ~0101 = 1010)
console.log(`Bitwise NOT: ${notResult}`);

// Left Shift (<<)
const leftShiftResult = 5 << 2; // result is 20 (binary: 101 << 2 = 10100)
console.log(`Left Shift: ${leftShiftResult}`);

// Right Shift (>>)
const rightShiftResult = 16 >> 2; // result is 4 (binary: 10000 >> 2 = 0001)
console.log(`Right Shift: ${rightShiftResult}`);

// Zero-fill Right Shift (>>>)
const zeroFillRightShiftResult = -16 >>> 2; // result is 1073741821 (binary: 11111111111111111111111111110000 >>> 2 = 00111111111111111111111111111100)
console.log(`Zero-fill Right Shift: ${zeroFillRightShiftResult}`);
