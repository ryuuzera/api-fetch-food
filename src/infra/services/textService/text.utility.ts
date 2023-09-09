export default class TextUtility {
  static removeSpecialCharacters(text: string = ''): string {
    return text?.replace(/[^\w\s]/gi, '');
  }
}
