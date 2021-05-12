# xk6-toml

xk6-toml enables k6 tests to comfortably encode and decode TOML values.

## Usage

Import an entire module's contents:
```JavaScript
import * as TOML from "k6/x/toml";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/toml";
```

## Table of contents

### Functions

- [parse](README.md#parse)
- [stringify](README.md#stringify)

## Functions

### parse

▸ **parse**(`text`: *string*): *object*

The parse() method parses a TOML string, constructing the JavaScript object described by the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | *string* | The string to parse as TOML |

**Returns:** *object*

The Object corresponding to the given TOML text.

___

### stringify

▸ **stringify**(`value`: *object*): *string*

The stringify() method converts a JavaScript object to a TOML string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | *object* | The value to convert to a TOML string |

**Returns:** *string*

A TOML string representing the given object
