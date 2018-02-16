declare module 'runes' {
  interface RunesFunction {
    (str: string): string[];
  }

  var runes: RunesFunction;

  export default runes;
}
