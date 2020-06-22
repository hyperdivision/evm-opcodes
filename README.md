# `evm-opcodes`

[![Build Status](https://travis-ci.org/Hyperdivision/evm-opcodes.svg?branch=master)](https://travis-ci.org/Hyperdivision/evm-opcodes)

> Map of all EVM opcodes, mnemonic, inputs, outputs, expression and notes

## Usage

```js
const evmOpcodes = require('evm-opcodes')

const opcodes = new Map(evmOpcodes.map(o => [o.opcode, o]))
const mnemonic = new Map(evmOpcodes.map(o => [o.mnemonic, o]))
```

## API

### `const opcodes = [opcodes...]`

`opcodes` are objects of:

```
{
  opcode: Number, // Hex Opcode
  mnemonic: String, // Mnemonic from Yello Paper / EIPs
  inputs: [String...], // List of stack inputs with human readable names
  outputs: [String...], // List of stack outputs with human readable names
  expression: String, // Expression in pseudo code
  notes: String, // Human readable description of instruction behaviour
  byteLength: Number, // Instruction length in bytes (PUSH* > 1)
  terminal: Boolean, // Ends execution or not
  // Following properties are only present on relevant instructions
  readsMemory: [Number...], // List of `inputs` indexes affecting reads from memory
  writesMemory: [Number...], // List of `inputs` indexes affecting writes to memory
  readsStorage: [Number...], // List of `inputs` indexes affecting reads from storage
  writesStorage: [Number...] // List of `inputs` indexes affecting writes to storage
}
```

Information is enriched from [https://ethervm.io/](https://ethervm.io/)

## Install

```sh
npm install evm-opcodes
```

## License

[ISC](LICENSE)
