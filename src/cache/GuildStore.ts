import { Guild } from "../models/Guild";
import Store from "./Store";


export default class GuildStore extends Store {
    private static readonly key = 'guilds';
    private guilds: Guild[];

    constructor(data?: Guild[]) {
        super();
        this.guilds = data || [];
    }

    public static storeGuild(guild: Guild): boolean {
        let store = GuildStore.getGuildsStore();
        let exists = GuildStore.doesGuildExist(store.guilds, guild.id);

        if (exists) {
            return false;
        }

        store.guilds.push(guild);
        store.save();

        return true;
    }

    public static getGuild(id: number): Guild | null {
        let store = GuildStore.getGuildsStore();

        for (const guild of store.guilds) {
            if (guild.id === id) {
                return guild;
            }
        }

        return null;
    }

    private save() {
        Store.saveData<Guild>(GuildStore.key, this.guilds);
    }

    private static getGuildsStore(): GuildStore {
        let data = Store.fetchData<Guild>(GuildStore.key);
        return new GuildStore(data);
    }

    private static doesGuildExist(guilds: Guild[], id: number): boolean {
        return guilds.some((guild: Guild) => id === guild.id);
    }
}
