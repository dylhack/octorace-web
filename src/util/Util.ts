/**
 * @class Util
 * General purpose utility methods.
 */
export default class Util {
    /**
     * Whether or not the user is logged in or not.
     * @method isLoggedIn
     * @returns {boolean}
     */
    public static isLoggedIn(): boolean {
        return document.cookie.match('discord_token') !== null;
    }
}
