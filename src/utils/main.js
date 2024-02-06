/**
 * Function to capitalize the first letter of each word in a string.
 * @param {string} text - The input string.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
export function capitalizeFirstLetterOfEachWord(text) {
    return text.toLowerCase().replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
    });
}