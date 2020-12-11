import { Profile } from "../models/Profile";
import Sort from "./Sort";


/**
 * @class Organize
 * The organize util class organizes arrays. Each method name represents
 * the array of a certain model (see src/models) that it's organized.
 */
export default class Organize {
    /**
     * Organize an array of profiles first by sorting by name and then most
     * contributions.
     * @method profiles
     * @param {Profile[]} profiles Unorganized profiles
     * @returns {Profile[]} An organized array of profiles
     */
    public static profiles(profiles: Profile[]): Profile[] {
        return profiles.sort((a: Profile, b: Profile) => {
            return Sort.byName(a.tag, b.tag);
        }).sort((a: Profile, b: Profile) => {
            return Sort.byGreatest(a.contributions, b.contributions);
        });
    }
}
