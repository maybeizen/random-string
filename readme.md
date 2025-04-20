# @maybeizen/random-string

A simple, lightweight, and flexible random string generator for JavaScript and TypeScript.

---

## Features

- Easy to use and well-typed
- Fully customizable character sets
- Great for passwords, tokens, or general-purpose random strings
- Supports custom charsets

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
  length: 12,
  useSymbols: true,
  useNumbers: true,
});

console.log(result); // Example: "d9@Fk3!bZ2#Q"
```

### Options

```ts
export interface RandomStringOptions {
  length?: number; // Default: 16
  useLowercase?: boolean; // Default: true
  useUppercase?: boolean; // Default: true
  useNumbers?: boolean; // Default: true
  useSymbols?: boolean; // Default: false
  customCharset?: string; // Default: undefined (overrides all other options)
}
```

| Option          | Type      | Default     | Description                                                            |
| --------------- | --------- | ----------- | ---------------------------------------------------------------------- |
| `length`        | `number`  | `16`        | Length of the generated string                                         |
| `useLowercase`  | `boolean` | `true`      | Include lowercase letters (a–z)                                        |
| `useUppercase`  | `boolean` | `true`      | Include uppercase letters (A–Z)                                        |
| `useNumbers`    | `boolean` | `true`      | Include numeric characters (0–9)                                       |
| `useSymbols`    | `boolean` | `false`     | Include symbols (`!@#$%^&*`, etc.)                                     |
| `customCharset` | `string`  | `undefined` | Provide a custom character set (overrides all other character options) |

---

## Example Output

```ts
generateRandomString({ length: 8 });
// "dK3g9HqZ"

generateRandomString({ useSymbols: true });
// "Y2@f#qL!P9$z"

generateRandomString({ length: 6, customCharset: "abc123" });
// "a3b1ca"
```

---

## License

This project is licensed under the MIT license. See the [LICENSE](license) file for details.

---

## Contributing

Pull requests and issues are welcome! Feel free to open a PR if you’d like to add features or improve performance.

---

Made with ❤️ by [maybeizen](https://github.com/maybeizen).
