import { ENDPOINTS } from "../constants";
import { Guild } from "../models/Guild";


/**
 * @class Store
 * Store manages session storage and endpoints. If data does not exist in the
 * user's session storage then it calls the backend.
 */
export default class Store {
    private static readonly GUILDS = 'guilds';

    /**
     * getGuilds will check session storage for guilds and if they're not there
     * then it will fetch the user's guilds from the backend.
     * @method getGuilds
     * @returns {Promise<Guild[]>}
     */
    public static async getGuilds(): Promise<Guild[]> {
        const res = Store.loadGuilds();

        if (res.length === 0) {
            return (await Store.fetchGuilds());
        }

        return res;
    }

    /**
     * getGuild will call getGuilds, iterate through all the guilds until the
     * right guild is found. If nothing is found then the promise fails.
     * @method getGuild
     * @returns {Promise<Guild>}
     */
    public static async getGuild(id: number): Promise<Guild> {
        const guilds = await Store.getGuilds();

        for (const guild of guilds) {
            if (guild.id === id) {
                return guild;
            }
        }

        throw new Error(`Couldn't find guild "${id}".`);
    }

    /**
     * fetchGuilds gets an array of Guilds from the backend.
     * @method fetchGuilds
     * @returns {Promise<Guild[]>}
     */
    private static async fetchGuilds(): Promise<Guild[]> {
        const data = await (await fetch(ENDPOINTS.GUILDS)).json();

        Store.storeGuilds(data);

        return data;
    }

    /**
     * loadGuilds gets guilds from the session storage.
     * @method loadGuilds
     * @returns {Guild[]} Possibly empty if it doesn't exist.
     */
    private static loadGuilds(): Guild[] {
        let serialized = JSON.stringify(Store.GUILDS);

        if (serialized === null) {
            return [];
        }

        return JSON.parse(serialized);
    }

    /**
     * storeGuilds will store a given array of guilds to session storage
     * @param {Guild[]} guilds
     */
    private static storeGuilds(guilds: Guild[]) {
        let serialized = JSON.stringify(guilds);

        sessionStorage.setItem(Store.GUILDS, serialized);
    }
}
