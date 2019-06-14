const evmOpcodes = require('.')

const opcodes = new Map(evmOpcodes.map(o => [o.opcode, o]))
const mnemonic = new Map(evmOpcodes.map(o => [o.mnemonic, o]))
