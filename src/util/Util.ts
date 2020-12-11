import { Guild } from "../models/Guild";
import { Profile } from "../models/Profile";


export default class Util {
    public static organizeGuilds(guilds: Guild[]): Guild[] {
        return guilds.sort((a: Guild, b: Guild) => {
            return Util.sortByName(a.name, b.name);
        }).sort((a: Guild, b: Guild) => {
            return Util.sortByGreatest(a.profiles.length, b.profiles.length);
        }).filter((guild: Guild) => {
            return guild.profiles.length > 1;
        });
    }



    public static sortProfiles(profiles: Profile[]): Profile[] {
        return profiles.sort((a: Profile, b: Profile) => {
            return Util.sortByName(a.tag, b.tag);
        }).sort((a: Profile, b: Profile) => {
            return Util.sortByGreatest(a.contributions, b.contributions);
        });
    }


    private static sortByName(nameA: string, nameB: string): number {
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

    private static sortByGreatest(numA: number, numB: number): number {
        if (numA === numB) {
            return 0;
        } else if (numA > numB) {
            return -1;
        } else {
            return 1;
        }
    }
}
