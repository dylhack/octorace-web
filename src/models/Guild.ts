import { Profile } from './Profile';


export type Guild  = {
    name: string,
    id: number,
    icon_url: string,
    profiles: Profile[],
}
