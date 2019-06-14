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
  opcode: Number,
  mnemonic: String,
  inputs: [String...],
  outputs: [String...],
  expression: String,
  notes: String
}
```

## Install

```sh
npm install evm-opcodes
```

## License

[ISC](LICENSE)
