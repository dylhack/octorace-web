import { ENDPOINTS } from "../constants";
import { Profile } from "../models/Profile";


export default class Store {
    private static readonly FRIENDS = 'friends';

    /**
     * Get friends from session storage, if they don't exist there then
     * it will fetch the friends endpoint ( see @method fetchFriends ).
     * @method getFriends
     * @returns {Promise<Profile[]>}
     */
    public static async getFriends(): Promise<Profile[]> {
        let res = Store.loadFriends();

        if (res.length === 0) {
            return (await Store.fetchFriends());
        }

        return res;
    }

    /**
     * Fetches out to the friends endpoint (see ENDPOINTS in src/constants)
     * and returns an array of profiles.
     * @method fetchFriends
     * @returns {Profile[]}
     */
    private static async fetchFriends(): Promise<Profile[]> {
        const data = await (await fetch(ENDPOINTS.FRIENDS)).json();

        Store.storeFriends(data);

        return data;
    }


    /**
     * Load friends from local storage
     * @method loadFriends
     * @returns {Profile[]}
     */
    private static loadFriends(): Profile[] {
        let serialized = JSON.stringify(Store.FRIENDS);

        if (serialized === null) {
            return [];
        }

        return JSON.parse(serialized);
    }

    /**
     * Stores friends into session storage
     * @param {Profile[]} friends
     */
    private static storeFriends(friends: Profile[]) {
        let serialized = JSON.stringify(friends);

        sessionStorage.setItem(Store.FRIENDS, serialized);
    }
}
