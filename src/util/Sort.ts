/**
 * @class Sort
 * The sort utility class has static methods that help sort arrays based on
 * the elements being compared.
 */
export default class Sort {
    /**
     * Sort alphabetically from A to Z.
     * @method byName
     * @param {string} nameA
     * @param {string} nameB
     * @returns {number} Used by Array.prototype.sort
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    public static byName(nameA: string, nameB: string): number {
        nameA = nameA.toUpperCase();
        nameB = nameB.toUpperCase();

        if (nameA === nameB) {
            return 0;
        } else if (nameA < nameB) {
            return -1;
        } else {
            return 1;
        }
    }

    /**
     * Sort by greatest number.
     * @method byGreatest
     * @param {number} numA
     * @param {number} numB
     * @returns {number} Used by Array.prototype.sort
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    public static byGreatest(numA: number, numB: number): number {
        if (numA === numB) {
            return 0;
        } else if (numA > numB) {
            return -1;
        } else {
            return 1;
        }
    }
}
