# xk6-toml

A k6 extension enables k6 tests to comfortably encode and decode TOML values.

The underlying implementation is https://github.com/pelletier/go-toml

Built for [k6](https://github.com/loadimpact/k6) using [xk6](https://github.com/k6io/xk6).

## Usage

Import an entire module's contents:
```JavaScript
import * as TOML from "k6/x/toml";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/toml";
```

## API

Functions:

- [parse](docs/README.md#parse)
- [stringify](docs/README.md#stringify)

For complete API documentation click [here](docs/README.md)!

## Build

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git

Then:

1. Download `xk6`:
  ```bash
  $ go get -u github.com/k6io/xk6
  ```

2. Build the binary:
  ```bash
  $ xk6 build --with github.com/szkiba/xk6-toml
  ```
