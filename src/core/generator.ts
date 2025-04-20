import { getRandomChar } from "../utils/getRandomChar";
import { LOWERCASE, UPPERCASE, NUMBERS, SYMBOLS } from "../utils/constants";
import { RandomStringOptions } from "../types";
import { MissingCharsetError } from "../errors/MissingCharsetError";

const charsetCache = new Map<string, string>();

function buildCharset(options: RandomStringOptions): string {
  const cacheKey = JSON.stringify({
    customCharset: options.customCharset,
    useLowercase: options.useLowercase,
    useUppercase: options.useUppercase,
    useNumbers: options.useNumbers,
    useSymbols: options.useSymbols,
  });

  if (charsetCache.has(cacheKey)) {
    return charsetCache.get(cacheKey)!;
  }

  let charset = options.customCharset || "";

  if (!options.customCharset) {
    if (options.useLowercase ?? true) charset += LOWERCASE;
    if (options.useUppercase ?? true) charset += UPPERCASE;
    if (options.useNumbers ?? true) charset += NUMBERS;
    if (options.useSymbols ?? false) charset += SYMBOLS;
  }

  if (!charset) throw new MissingCharsetError();

  charsetCache.set(cacheKey, charset);
  return charset;
}

export function generateRandomString(
  options: RandomStringOptions = {}
): string {
  const length = options.length ?? 16;
  const charset = buildCharset(options);

  const result = new Array<string>(length);
  for (let i = 0; i < length; i++) {
    result[i] = getRandomChar(charset);
  }

  return result.join("");
}
