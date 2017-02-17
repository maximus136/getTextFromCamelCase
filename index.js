/**
* @description Takes text and required text-case as inputs and returns text in required format. Returns title-cased output if case is not passed.
* @param {string} text - the input text.
* @param {string} newCase - required output case - 'upperCase'/'lowerCase'.
* @return {string} output - text in required case. Returns in title-case by default.
*/
export function getTextFromCamelCase(text, newCase) {
  const output = text.replace(/[^A-Z](?=[A-Z])/g, (match) => {
    return `${match} `;
  });

  switch (newCase) {
    case 'upperCase':
      return output.toUpperCase();
    case 'lowerCase':
      return output.toLowerCase();
    default:
      return output.charAt(0).toUpperCase() + output.slice(1);
  }
}