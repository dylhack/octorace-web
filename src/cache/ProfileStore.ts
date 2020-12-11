import { Profile } from "../models/Profile";
import Store from "./Store";


export default class ProfileStore extends Store {
    private static readonly key = 'profiles';
    private profiles: Profile[];

    constructor(profiles?: Profile[]) {
        super();
        this.profiles = profiles || [];
    }

    public getProfile(id: number): Profile | null {
        let store = ProfileStore.getProfileStore();

        for (const profile of store.profiles) {
        }

        return null;
    }

    private save() {
        Store.saveData<Profile>(ProfileStore.key, this.profiles);
    }

    private static getProfileStore(): ProfileStore {
        let data = super.fetchData<Profile>(ProfileStore.key)
            .sort(ProfileStore.sort);

        return new ProfileStore(data);
    }

    private static sort(profileA: Profile, profileB: Profile): number {
        if (profileA.contributions === profileB.contributions) {
            return 0;
        }

        if (profileA.contributions < profileB.contributions) {
            return -1;
        }

        return 1;
    }
}
