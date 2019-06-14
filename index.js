// From https://ethervm.io/
module.exports = [
  {
    opcode: 0x0,
    mnemonic: 'STOP',
    inputs: [],
    outputs: [],
    expression: 'STOP()',
    notes: 'halts execution of the contract'
  },
  {
    opcode: 0x1,
    mnemonic: 'ADD',
    inputs: ['a', 'b'],
    outputs: ['a + b'],
    expression: 'a + b',
    notes: '(u)int256 addition modulo 2**256'
  },
  {
    opcode: 0x2,
    mnemonic: 'MUL',
    inputs: ['a', 'b'],
    outputs: ['a * b'],
    expression: 'a * b',
    notes: '(u)int256 multiplication modulo 2**256'
  },
  {
    opcode: 0x3,
    mnemonic: 'SUB',
    inputs: ['a', 'b'],
    outputs: ['a - b'],
    expression: 'a - b',
    notes: '(u)int256 subtraction modulo 2**256'
  },
  {
    opcode: 0x4,
    mnemonic: 'DIV',
    inputs: ['a', 'b'],
    outputs: ['a // b'],
    expression: 'a // b',
    notes: 'uint256 division'
  },
  {
    opcode: 0x5,
    mnemonic: 'SDIV',
    inputs: ['a', 'b'],
    outputs: ['a // b'],
    expression: 'a // b',
    notes: 'int256 division'
  },
  {
    opcode: 0x6,
    mnemonic: 'MOD',
    inputs: ['a', 'b'],
    outputs: ['a % b'],
    expression: 'a % b',
    notes: 'uint256 modulus'
  },
  {
    opcode: 0x7,
    mnemonic: 'SMOD',
    inputs: ['a', 'b'],
    outputs: ['a % b'],
    expression: 'a % b',
    notes: 'int256 modulus'
  },
  {
    opcode: 0x8,
    mnemonic: 'ADDMOD',
    inputs: ['a', 'b', 'N'],
    outputs: ['(a + b) % N'],
    expression: '(a + b) % N',
    notes: '(u)int256 addition modulo N'
  },
  {
    opcode: 0x9,
    mnemonic: 'MULMOD',
    inputs: ['a', 'b', 'N'],
    outputs: ['(a * b) % N'],
    expression: '(a * b) % N',
    notes: '(u)int256 multiplication modulo N'
  },
  {
    opcode: 0x0A,
    mnemonic: 'EXP',
    inputs: ['a', 'b'],
    outputs: ['a ** b'],
    expression: 'a ** b',
    notes: 'uint256 exponentiation modulo 2**256'
  },
  {
    opcode: 0x0B,
    mnemonic: 'SIGNEXTEND',
    inputs: ['b', 'x'],
    outputs: ['y'],
    expression: 'y = SIGNEXTEND(x, b)',
    notes: 'sign extends x from (b + 1) * 8 bits to 256 bits.'
  },
  {
    opcode: 0x0C,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x0D,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x0E,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x0F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x10,
    mnemonic: 'LT',
    inputs: ['a', 'b'],
    outputs: ['a < b'],
    expression: 'a < b',
    notes: 'uint256 comparison'
  },
  {
    opcode: 0x11,
    mnemonic: 'GT',
    inputs: ['a', 'b'],
    outputs: ['a > b'],
    expression: 'a > b',
    notes: 'uint256 comparison'
  },
  {
    opcode: 0x12,
    mnemonic: 'SLT',
    inputs: ['a', 'b'],
    outputs: ['a < b'],
    expression: 'a < b',
    notes: 'int256 comparison'
  },
  {
    opcode: 0x13,
    mnemonic: 'SGT',
    inputs: ['a', 'b'],
    outputs: ['a > b'],
    expression: 'a > b',
    notes: 'int256 comparison'
  },
  {
    opcode: 0x14,
    mnemonic: 'EQ',
    inputs: ['a', 'b'],
    outputs: ['a == b'],
    expression: 'a == b',
    notes: '(u)int256 equality'
  },
  {
    opcode: 0x15,
    mnemonic: 'ISZERO',
    inputs: ['a'],
    outputs: ['a == 0'],
    expression: 'a == 0',
    notes: '(u)int256 is zero'
  },
  {
    opcode: 0x16,
    mnemonic: 'AND',
    inputs: ['a', 'b'],
    outputs: ['a & b'],
    expression: 'a & b',
    notes: '256-bit bitwise and'
  },
  {
    opcode: 0x17,
    mnemonic: 'OR',
    inputs: ['a', 'b'],
    outputs: ['a | b'],
    expression: 'a | b',
    notes: '256-bit bitwise or'
  },
  {
    opcode: 0x18,
    mnemonic: 'XOR',
    inputs: ['a', 'b'],
    outputs: ['a ^ b'],
    expression: 'a ^ b',
    notes: '256-bit bitwise xor'
  },
  {
    opcode: 0x19,
    mnemonic: 'NOT',
    inputs: ['a'],
    outputs: ['~a'],
    expression: '~a',
    notes: '256-bit bitwise not'
  },
  {
    opcode: 0x1A,
    mnemonic: 'BYTE',
    inputs: ['i', 'x'],
    outputs: ['y'],
    expression: 'y = (x >> (i * 8)) & 0xFF',
    notes: 'ith byte of (u)int256 x'
  },
  {
    opcode: 0x1B,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x1C,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x1D,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x1E,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x1F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x20,
    mnemonic: 'SHA3',
    inputs: ['offset', 'length'],
    outputs: ['hash'],
    expression: 'hash = keccak256(memory[offset:offset+length])',
    notes: 'keccak256'
  },
  {
    opcode: 0x21,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x22,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x23,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x24,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x25,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x26,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x27,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x28,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x29,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2A,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2B,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2C,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2D,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2E,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x2F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x30,
    mnemonic: 'ADDRESS',
    inputs: [],
    outputs: ['address(this)'],
    expression: 'address(this)',
    notes: 'address of the executing contract'
  },
  {
    opcode: 0x31,
    mnemonic: 'BALANCE',
    inputs: ['addr'],
    outputs: ['address(addr).balance'],
    expression: 'address(addr).balance',
    notes: 'address balance in wei'
  },
  {
    opcode: 0x32,
    mnemonic: 'ORIGIN',
    inputs: [],
    outputs: ['tx.origin'],
    expression: 'tx.origin',
    notes: 'transaction origin address'
  },
  {
    opcode: 0x33,
    mnemonic: 'CALLER',
    inputs: [],
    outputs: ['msg.caller'],
    expression: 'msg.caller',
    notes: 'message caller address'
  },
  {
    opcode: 0x34,
    mnemonic: 'CALLVALUE',
    inputs: [],
    outputs: ['msg.value'],
    expression: 'msg.value',
    notes: 'message funds in wei'
  },
  {
    opcode: 0x35,
    mnemonic: 'CALLDATALOAD',
    inputs: ['i'],
    outputs: ['msg.data[i:i+32]'],
    expression: 'msg.data[i:i+32]',
    notes: 'reads a (u)int256 from message data'
  },
  {
    opcode: 0x36,
    mnemonic: 'CALLDATASIZE',
    inputs: [],
    outputs: ['msg.data.size'],
    expression: 'msg.data.size',
    notes: 'message data length in bytes'
  },
  {
    opcode: 0x37,
    mnemonic: 'CALLDATACOPY',
    inputs: ['destOffset', 'offset', 'length'],
    outputs: [],
    expression: 'memory[destOffset:destOffset+length] = msg.data[offset:offset+length]',
    notes: 'copy message data'
  },
  {
    opcode: 0x38,
    mnemonic: 'CODESIZE',
    inputs: [],
    outputs: ['address(this).code.size'],
    expression: 'address(this).code.size',
    notes: "length of the executing contract's code in bytes"
  },
  {
    opcode: 0x39,
    mnemonic: 'CODECOPY',
    inputs: ['destOffset', 'offset', 'length'],
    outputs: [],
    expression: 'memory[destOffset:destOffset+length] = address(this).code[offset:offset+length]',
    notes: "copy executing contract's bytecode"
  },
  {
    opcode: 0x3A,
    mnemonic: 'GASPRICE',
    inputs: [],
    outputs: ['tx.gasprice'],
    expression: 'tx.gasprice',
    notes: 'gas price of the executing transaction, in wei per unit of gas'
  },
  {
    opcode: 0x3B,
    mnemonic: 'EXTCODESIZE',
    inputs: ['addr'],
    outputs: ['address(addr).code.size'],
    expression: 'address(addr).code.size',
    notes: 'length of the contract bytecode at addr, in bytes'
  },
  {
    opcode: 0x3C,
    mnemonic: 'EXTCODECOPY',
    inputs: ['addr', 'destOffset', 'offset', 'length'],
    outputs: [],
    expression: 'memory[destOffset:destOffset+length] = address(addr).code[offset:offset+length]',
    notes: "copy contract's bytecode"
  },
  {
    opcode: 0x3D,
    mnemonic: 'RETURNDATASIZE',
    inputs: [],
    outputs: ['size'],
    expression: 'size = RETURNDATASIZE()',
    notes: 'the size of the returned data from the last external call, in bytes'
  },
  {
    opcode: 0x3E,
    mnemonic: 'RETURNDATACOPY',
    inputs: ['destOffset', 'offset', 'length'],
    outputs: [],
    expression: 'memory[destOffset:destOffset+length] = RETURNDATA[offset:offset+length]',
    notes: 'copy returned data'
  },
  {
    opcode: 0x3F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x40,
    mnemonic: 'BLOCKHASH',
    inputs: ['blockNumber'],
    outputs: ['hash'],
    expression: 'hash = block.blockHash(blockNumber)',
    notes: 'hash of the specific block, only valid for the 256 most recent blocks, excluding the current one'
  },
  {
    opcode: 0x41,
    mnemonic: 'COINBASE',
    inputs: [],
    outputs: ['block.coinbase'],
    expression: 'block.coinbase',
    notes: "address of the current block's miner"
  },
  {
    opcode: 0x42,
    mnemonic: 'TIMESTAMP',
    inputs: [],
    outputs: ['block.timestamp'],
    expression: 'block.timestamp',
    notes: "current block's Unix timestamp in seconds"
  },
  {
    opcode: 0x43,
    mnemonic: 'NUMBER',
    inputs: [],
    outputs: ['block.number'],
    expression: 'block.number',
    notes: "current block's number"
  },
  {
    opcode: 0x44,
    mnemonic: 'DIFFICULTY',
    inputs: [],
    outputs: ['block.difficulty'],
    expression: 'block.difficulty',
    notes: "current block's difficulty"
  },
  {
    opcode: 0x45,
    mnemonic: 'GASLIMIT',
    inputs: [],
    outputs: ['block.gaslimit'],
    expression: 'block.gaslimit',
    notes: "current block's gas limit"
  },
  {
    opcode: 0x46,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x47,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x48,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x49,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4A,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4B,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4C,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4D,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4E,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x4F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x50,
    mnemonic: 'POP',
    inputs: ['_'],
    outputs: [],
    expression: 'POP()',
    notes: 'pops a (u)int256 off the stack and discards it'
  },
  {
    opcode: 0x51,
    mnemonic: 'MLOAD',
    inputs: ['offset'],
    outputs: ['value'],
    expression: 'value = memory[offset:offset+32]',
    notes: 'reads a (u)int256 from memory'
  },
  {
    opcode: 0x52,
    mnemonic: 'MSTORE',
    inputs: ['offset', 'value'],
    outputs: [],
    expression: 'memory[offset:offset+32] = value',
    notes: 'writes a (u)int256 to memory'
  },
  {
    opcode: 0x53,
    mnemonic: 'MSTORE8',
    inputs: ['offset', 'value'],
    outputs: [],
    expression: 'memory[offset] = value & 0xFF',
    notes: 'writes a uint8 to memory'
  },
  {
    opcode: 0x54,
    mnemonic: 'SLOAD',
    inputs: ['key'],
    outputs: ['value'],
    expression: 'value = storage[key]',
    notes: 'reads a (u)int256 from storage'
  },
  {
    opcode: 0x55,
    mnemonic: 'SSTORE',
    inputs: ['key', 'value'],
    outputs: [],
    expression: 'storage[key] = value',
    notes: 'writes a (u)int256 to storage'
  },
  {
    opcode: 0x56,
    mnemonic: 'JUMP',
    inputs: ['destination'],
    outputs: [],
    expression: '$pc = destination',
    notes: 'unconditional jump'
  },
  {
    opcode: 0x57,
    mnemonic: 'JUMPI',
    inputs: ['destination', 'condition'],
    outputs: [],
    expression: '$pc = cond ? destination : $pc + 1',
    notes: 'conditional jump if condition is truthy'
  },
  {
    opcode: 0x58,
    mnemonic: 'PC',
    inputs: [],
    outputs: ['$pc'],
    expression: '$pc',
    notes: 'program counter'
  },
  {
    opcode: 0x59,
    mnemonic: 'MSIZE',
    inputs: [],
    outputs: ['size'],
    expression: 'size = MSIZE()',
    notes: 'size of memory for this contract execution, in bytes'
  },
  {
    opcode: 0x5A,
    mnemonic: 'GAS',
    inputs: [],
    outputs: ['gasRemaining'],
    expression: 'gasRemaining = GAS()',
    notes: 'remaining gas'
  },
  {
    opcode: 0x5B,
    mnemonic: 'JUMPDEST',
    inputs: [],
    outputs: [],
    expression: '',
    notes: 'metadata to annotate possible jump destinations'
  },
  {
    opcode: 0x5C,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x5D,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x5E,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x5F,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0x60,
    mnemonic: 'PUSH1',
    inputs: [],
    outputs: ['uint8'],
    expression: 'PUSH(uint8)',
    notes: 'pushes a 1-byte value onto the stack'
  },
  {
    opcode: 0x61,
    mnemonic: 'PUSH2',
    inputs: [],
    outputs: ['uint16'],
    expression: 'PUSH(uint16)',
    notes: 'pushes a 2-byte value onto the stack'
  },
  {
    opcode: 0x62,
    mnemonic: 'PUSH3',
    inputs: [],
    outputs: ['uint24'],
    expression: 'PUSH(uint24)',
    notes: 'pushes a 3-byte value onto the stack'
  },
  {
    opcode: 0x63,
    mnemonic: 'PUSH4',
    inputs: [],
    outputs: ['uint32'],
    expression: 'PUSH(uint32)',
    notes: 'pushes a 4-byte value onto the stack'
  },
  {
    opcode: 0x64,
    mnemonic: 'PUSH5',
    inputs: [],
    outputs: ['uint40'],
    expression: 'PUSH(uint40)',
    notes: 'pushes a 5-byte value onto the stack'
  },
  {
    opcode: 0x65,
    mnemonic: 'PUSH6',
    inputs: [],
    outputs: ['uint48'],
    expression: 'PUSH(uint48)',
    notes: 'pushes a 6-byte value onto the stack'
  },
  {
    opcode: 0x66,
    mnemonic: 'PUSH7',
    inputs: [],
    outputs: ['uint56'],
    expression: 'PUSH(uint56)',
    notes: 'pushes a 7-byte value onto the stack'
  },
  {
    opcode: 0x67,
    mnemonic: 'PUSH8',
    inputs: [],
    outputs: ['uint64'],
    expression: 'PUSH(uint64)',
    notes: 'pushes a 8-byte value onto the stack'
  },
  {
    opcode: 0x68,
    mnemonic: 'PUSH9',
    inputs: [],
    outputs: ['uint72'],
    expression: 'PUSH(uint72)',
    notes: 'pushes a 9-byte value onto the stack'
  },
  {
    opcode: 0x69,
    mnemonic: 'PUSH10',
    inputs: [],
    outputs: ['uint80'],
    expression: 'PUSH(uint80)',
    notes: 'pushes a 10-byte value onto the stack'
  },
  {
    opcode: 0x6A,
    mnemonic: 'PUSH11',
    inputs: [],
    outputs: ['uint88'],
    expression: 'PUSH(uint88)',
    notes: 'pushes a 11-byte value onto the stack'
  },
  {
    opcode: 0x6B,
    mnemonic: 'PUSH12',
    inputs: [],
    outputs: ['uint96'],
    expression: 'PUSH(uint96)',
    notes: 'pushes a 12-byte value onto the stack'
  },
  {
    opcode: 0x6C,
    mnemonic: 'PUSH13',
    inputs: [],
    outputs: ['uint104'],
    expression: 'PUSH(uint104)',
    notes: 'pushes a 13-byte value onto the stack'
  },
  {
    opcode: 0x6D,
    mnemonic: 'PUSH14',
    inputs: [],
    outputs: ['uint112'],
    expression: 'PUSH(uint112)',
    notes: 'pushes a 14-byte value onto the stack'
  },
  {
    opcode: 0x6E,
    mnemonic: 'PUSH15',
    inputs: [],
    outputs: ['uint120'],
    expression: 'PUSH(uint120)',
    notes: 'pushes a 15-byte value onto the stack'
  },
  {
    opcode: 0x6F,
    mnemonic: 'PUSH16',
    inputs: [],
    outputs: ['uint128'],
    expression: 'PUSH(uint128)',
    notes: 'pushes a 16-byte value onto the stack'
  },
  {
    opcode: 0x70,
    mnemonic: 'PUSH17',
    inputs: [],
    outputs: ['uint136'],
    expression: 'PUSH(uint136)',
    notes: 'pushes a 17-byte value onto the stack'
  },
  {
    opcode: 0x71,
    mnemonic: 'PUSH18',
    inputs: [],
    outputs: ['uint144'],
    expression: 'PUSH(uint144)',
    notes: 'pushes a 18-byte value onto the stack'
  },
  {
    opcode: 0x72,
    mnemonic: 'PUSH19',
    inputs: [],
    outputs: ['uint152'],
    expression: 'PUSH(uint152)',
    notes: 'pushes a 19-byte value onto the stack'
  },
  {
    opcode: 0x73,
    mnemonic: 'PUSH20',
    inputs: [],
    outputs: ['uint160'],
    expression: 'PUSH(uint160)',
    notes: 'pushes a 20-byte value onto the stack'
  },
  {
    opcode: 0x74,
    mnemonic: 'PUSH21',
    inputs: [],
    outputs: ['uint168'],
    expression: 'PUSH(uint168)',
    notes: 'pushes a 21-byte value onto the stack'
  },
  {
    opcode: 0x75,
    mnemonic: 'PUSH22',
    inputs: [],
    outputs: ['uint176'],
    expression: 'PUSH(uint176)',
    notes: 'pushes a 22-byte value onto the stack'
  },
  {
    opcode: 0x76,
    mnemonic: 'PUSH23',
    inputs: [],
    outputs: ['uint184'],
    expression: 'PUSH(uint184)',
    notes: 'pushes a 23-byte value onto the stack'
  },
  {
    opcode: 0x77,
    mnemonic: 'PUSH24',
    inputs: [],
    outputs: ['uint192'],
    expression: 'PUSH(uint192)',
    notes: 'pushes a 24-byte value onto the stack'
  },
  {
    opcode: 0x78,
    mnemonic: 'PUSH25',
    inputs: [],
    outputs: ['uint200'],
    expression: 'PUSH(uint200)',
    notes: 'pushes a 25-byte value onto the stack'
  },
  {
    opcode: 0x79,
    mnemonic: 'PUSH26',
    inputs: [],
    outputs: ['uint208'],
    expression: 'PUSH(uint208)',
    notes: 'pushes a 26-byte value onto the stack'
  },
  {
    opcode: 0x7A,
    mnemonic: 'PUSH27',
    inputs: [],
    outputs: ['uint216'],
    expression: 'PUSH(uint216)',
    notes: 'pushes a 27-byte value onto the stack'
  },
  {
    opcode: 0x7B,
    mnemonic: 'PUSH28',
    inputs: [],
    outputs: ['uint224'],
    expression: 'PUSH(uint224)',
    notes: 'pushes a 28-byte value onto the stack'
  },
  {
    opcode: 0x7C,
    mnemonic: 'PUSH29',
    inputs: [],
    outputs: ['uint232'],
    expression: 'PUSH(uint232)',
    notes: 'pushes a 29-byte value onto the stack'
  },
  {
    opcode: 0x7D,
    mnemonic: 'PUSH30',
    inputs: [],
    outputs: ['uint240'],
    expression: 'PUSH(uint240)',
    notes: 'pushes a 30-byte value onto the stack'
  },
  {
    opcode: 0x7E,
    mnemonic: 'PUSH31',
    inputs: [],
    outputs: ['uint248'],
    expression: 'PUSH(uint248)',
    notes: 'pushes a 31-byte value onto the stack'
  },
  {
    opcode: 0x7F,
    mnemonic: 'PUSH32',
    inputs: [],
    outputs: ['uint256'],
    expression: 'PUSH(uint256)',
    notes: 'pushes a 32-byte value onto the stack'
  },
  {
    opcode: 0x80,
    mnemonic: 'DUP1',
    inputs: ['value'],
    outputs: ['value', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the last value on the stack'
  },
  {
    opcode: 0x81,
    mnemonic: 'DUP2',
    inputs: ['_', 'value'],
    outputs: ['value', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 2nd last value on the stack'
  },
  {
    opcode: 0x82,
    mnemonic: 'DUP3',
    inputs: ['_', '_', 'value'],
    outputs: ['value', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 3rd last value on the stack'
  },
  {
    opcode: 0x83,
    mnemonic: 'DUP4',
    inputs: ['_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 4th last value on the stack'
  },
  {
    opcode: 0x84,
    mnemonic: 'DUP5',
    inputs: ['_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 5th last value on the stack'
  },
  {
    opcode: 0x85,
    mnemonic: 'DUP6',
    inputs: ['_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 6th last value on the stack'
  },
  {
    opcode: 0x86,
    mnemonic: 'DUP7',
    inputs: ['_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 7th last value on the stack'
  },
  {
    opcode: 0x87,
    mnemonic: 'DUP8',
    inputs: ['_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 8th last value on the stack'
  },
  {
    opcode: 0x88,
    mnemonic: 'DUP9',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 9th last value on the stack'
  },
  {
    opcode: 0x89,
    mnemonic: 'DUP10',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 10th last value on the stack'
  },
  {
    opcode: 0x8A,
    mnemonic: 'DUP11',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 11th last value on the stack'
  },
  {
    opcode: 0x8B,
    mnemonic: 'DUP12',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 12th last value on the stack'
  },
  {
    opcode: 0x8C,
    mnemonic: 'DUP13',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 13th last value on the stack'
  },
  {
    opcode: 0x8D,
    mnemonic: 'DUP14',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 14th last value on the stack'
  },
  {
    opcode: 0x8E,
    mnemonic: 'DUP15',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 15th last value on the stack'
  },
  {
    opcode: 0x8F,
    mnemonic: 'DUP16',
    inputs: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    outputs: ['value', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'value'],
    expression: 'PUSH(value)',
    notes: 'clones the 16th last value on the stack'
  },
  {
    opcode: 0x90,
    mnemonic: 'SWAP1',
    inputs: ['a', 'b'],
    outputs: ['b', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the last two values on the stack'
  },
  {
    opcode: 0x91,
    mnemonic: 'SWAP2',
    inputs: ['a', '_', 'b'],
    outputs: ['b', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 3rd last element'
  },
  {
    opcode: 0x92,
    mnemonic: 'SWAP3',
    inputs: ['a', '_', '_', 'b'],
    outputs: ['b', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 4th last element'
  },
  {
    opcode: 0x93,
    mnemonic: 'SWAP4',
    inputs: ['a', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 5th last element'
  },
  {
    opcode: 0x94,
    mnemonic: 'SWAP5',
    inputs: ['a', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 6th last element'
  },
  {
    opcode: 0x95,
    mnemonic: 'SWAP6',
    inputs: ['a', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 7th last element'
  },
  {
    opcode: 0x96,
    mnemonic: 'SWAP7',
    inputs: ['a', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 8th last element'
  },
  {
    opcode: 0x97,
    mnemonic: 'SWAP8',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 9th last element'
  },
  {
    opcode: 0x98,
    mnemonic: 'SWAP9',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 10th last element'
  },
  {
    opcode: 0x99,
    mnemonic: 'SWAP10',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 11th last element'
  },
  {
    opcode: 0x9A,
    mnemonic: 'SWAP11',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 12th last element'
  },
  {
    opcode: 0x9B,
    mnemonic: 'SWAP12',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 13th last element'
  },
  {
    opcode: 0x9C,
    mnemonic: 'SWAP13',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 14th last element'
  },
  {
    opcode: 0x9D,
    mnemonic: 'SWAP14',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 15th last element'
  },
  {
    opcode: 0x9E,
    mnemonic: 'SWAP15',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 16th last element'
  },
  {
    opcode: 0x9F,
    mnemonic: 'SWAP16',
    inputs: ['a', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'b'],
    outputs: ['b', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'a'],
    expression: 'a, b = b, a',
    notes: 'swaps the top of the stack with the 17th last element'
  },
  {
    opcode: 0xA0,
    mnemonic: 'LOG0',
    inputs: ['offset', 'length'],
    outputs: [],
    expression: 'LOG0(memory[offset:offset+length])',
    notes: 'fires an event'
  },
  {
    opcode: 0xA1,
    mnemonic: 'LOG1',
    inputs: ['offset', 'length', 'topic0'],
    outputs: [],
    expression: 'LOG1(memory[offset:offset+length], topic0)',
    notes: 'fires an event'
  },
  {
    opcode: 0xA2,
    mnemonic: 'LOG2',
    inputs: ['offset', 'length', 'topic0', 'topic1'],
    outputs: [],
    expression: 'LOG2(memory[offset:offset+length], topic0, topic1)',
    notes: 'fires an event'
  },
  {
    opcode: 0xA3,
    mnemonic: 'LOG3',
    inputs: ['offset', 'length', 'topic0', 'topic1', 'topic2'],
    outputs: [],
    expression: 'LOG3(memory[offset:offset+length], topic0, topic1, topic2)',
    notes: 'fires an event'
  },
  {
    opcode: 0xA4,
    mnemonic: 'LOG4',
    inputs: ['offset', 'length', 'topic0', 'topic1', 'topic2', 'topic3'],
    outputs: [],
    expression: 'LOG4(memory[offset:offset+length], topic0, topic1, topic2, topic3)',
    notes: 'fires an event'
  },
  {
    opcode: 0xA5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xA6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xA7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xA8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xA9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAA,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAD,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xAF,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB0,
    mnemonic: 'PUSH',
    inputs: [],
    outputs: [],
    expression: '???',
    notes: '???'
  },
  {
    opcode: 0xB1,
    mnemonic: 'DUP',
    inputs: [],
    outputs: [],
    expression: '???',
    notes: '???'
  },
  {
    opcode: 0xB2,
    mnemonic: 'SWAP',
    inputs: [],
    outputs: [],
    expression: '???',
    notes: '???'
  },
  {
    opcode: 0xB3,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB4,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xB9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBA,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBD,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xBF,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC0,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC1,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC2,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC3,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC4,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xC9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCA,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCD,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xCF,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD0,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD1,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD2,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD3,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD4,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xD9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDA,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDD,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xDF,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE0,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE1,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE2,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE3,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE4,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xE9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xEA,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xEB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xEC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xED,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xEE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xEF,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xF0,
    mnemonic: 'CREATE',
    inputs: ['value', 'offset', 'length'],
    outputs: ['addr'],
    expression: 'addr = new memory[offset:offset+length].value(value)',
    notes: 'creates a child contract'
  },
  {
    opcode: 0xF1,
    mnemonic: 'CALL',
    inputs: ['gas', 'addr', 'value', 'argsOffset', 'argsLength', 'retOffset', 'retLength'],
    outputs: ['success'],
    expression: 'success, memory[retOffset:retOffset+retLength] = address(addr).call.gas(gas).value(value) (memory[argsOffset:argsOffset+argsLength])',
    notes: 'calls a method in another contract'
  },
  {
    opcode: 0xF2,
    mnemonic: 'CALLCODE',
    inputs: ['gas', 'addr', 'value', 'argsOffset', 'argsLength', 'retOffset', 'retLength'],
    outputs: ['success'],
    expression: 'success, memory[retOffset:retOffset+retLength] = address(addr).callcode.gas(gas).value(value) (memory[argsOffset:argsOffset+argsLength])',
    notes: '???'
  },
  {
    opcode: 0xF3,
    mnemonic: 'RETURN',
    inputs: ['offset', 'length'],
    outputs: [],
    expression: 'return memory[offset:offset+length]',
    notes: 'returns from this contract call'
  },
  {
    opcode: 0xF4,
    mnemonic: 'DELEGATECALL',
    inputs: ['gas', 'addr', 'argsOffset', 'argsLength', 'retOffset', 'retLength'],
    outputs: ['success'],
    expression: 'success, memory[retOffset:retOffset+retLength] = address(addr).delegatecall.gas(gas) (memory[argsOffset:argsOffset+argsLength])',
    notes: 'calls a method in another contract, using the storage of the current contract'
  },
  {
    opcode: 0xF5,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xF6,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xF7,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xF8,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xF9,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xFA,
    mnemonic: 'STATICCALL',
    inputs: ['gas', 'addr', 'argsOffset', 'argsLength', 'retOffset', 'retLength'],
    outputs: ['success'],
    expression: 'success, memory[retOffset:retOffset+retLength] = address(addr).staticcall.gas(gas) (memory[argsOffset:argsOffset+argsLength])',
    notes: '???'
  },
  {
    opcode: 0xFB,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xFC,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xFD,
    mnemonic: 'REVERT',
    inputs: ['offset', 'length'],
    outputs: [],
    expression: 'revert(memory[offset:offset+length])',
    notes: 'reverts with return data'
  },
  {
    opcode: 0xFE,
    mnemonic: 'Invalid',
    inputs: [],
    outputs: [],
    expression: '',
    notes: ''
  },
  {
    opcode: 0xFF,
    mnemonic: 'SELFDESTRUCT',
    inputs: ['addr'],
    outputs: [],
    expression: 'selfdestruct(address(addr))',
    notes: 'destroys the contract and sends all funds to addr.'
  }
]
