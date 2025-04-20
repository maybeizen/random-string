export class MissingCharsetError extends Error {
  constructor() {
    super("No characters available to generate string. Check your config.");
    this.name = "MissingCharsetError";
  }
}
