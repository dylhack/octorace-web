import { Guild } from "./Guild";


export default class GuildStore {
    private static GUILD_STORE = 'GUILD_STORE';
    private guilds: Guild[];

    constructor(data?: string) {
        this.guilds = data
            ? JSON.parse(data)
            : [];
    }


    public static getGuild(id: number): Guild | null {
        let store = GuildStore.getGuildStore();

        for (const guild of store.guilds) {
            if (guild.id === id) {
                return guild;
            }
        }

        return null;
    }


    public static storeGuild(guild: Guild) {
        let store = GuildStore.getGuildStore();

        store.guilds.push(guild);

        store.save();
    }

    private save() {
        let serialized = JSON.stringify(this.guilds);
        sessionStorage.setItem(GuildStore.GUILD_STORE, serialized);
    }

    private static getGuildStore(): GuildStore {
        let store = sessionStorage.getItem(GuildStore.GUILD_STORE);

        if (store) {
            return new GuildStore(store);
        } else {
            return new GuildStore();
        }
    }
}
