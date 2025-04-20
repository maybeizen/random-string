# @maybeizen/random-string

A simple, lightweight, and flexible random string generator for JavaScript and TypeScript.

---

## Features

- Easy to use
- Customizable length and character sets
- Optionally include symbols, numbers, etc. for secure tokens

---

## Installation

```bash
npm install @maybeizen/random-string
# or
yarn add @maybeizen/random-string
```

---

## Usage

```ts
import { generateRandomString } from "@maybeizen/random-string";

const result = generateRandomString({
  length: 10,
  useSymbols: true,
});

console.log(result); // Example: "a#9vT$kL@1"
```

### Options

| Option       | Type    | Default | Description                              |
| ------------ | ------- | ------- | ---------------------------------------- |
| `length`     | number  | `16`    | Length of the generated string           |
| `useSymbols` | boolean | `false` | Whether to include symbols (e.g., `!@#`) |

---

## Example Output

- `generateRandomString({ length: 8 })`: `"gT7dL2aQ"`
- `generateRandomString({ length: 8, useSymbols: true })`: `"f@9!Kd#Z"`

---

## License

This project is licensed under the MIT license. See the [LICENSE](license) file for details.

---

## Contributing

Pull requests and issues are welcome! Feel free to open a PR if you’d like to add features or improve performance.

---

Made with ❤️ by [maybeizen](https://github.com/maybeizen).
