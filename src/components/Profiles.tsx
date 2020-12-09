import Guilds from './Guilds';
import React from 'react';
import { useParams } from 'react-router';
import '../css/index.css';
import '../css/Guild.css';
import { CONTENT_CLASS, PROFILE_AVATAR_CLASS, PROFILE_CLASS, PROFILE_CONTRIBUTIONS_CLASS, PROFILE_DETAILS_CLASS, PROFILE_NAME_CLASS } from '..';
import { Profile } from '../models/Profile';


type GuildParams = {
    id?: number,
}

export default class Profiles extends React.Component<any, any> {
    private static renderError(guildID?: number) {
        return (
            <p>Failed to load users in guild {guildID || 'undefined'}</p>
        );
    }

    private static renderProfile(profile: Profile): React.ReactNode {
        return (
            <div className={PROFILE_CLASS}>
                <a href={`https://github.com/${profile.github}`}>
                    <img className={PROFILE_AVATAR_CLASS} />
                    <div className={PROFILE_DETAILS_CLASS}>
                        <h1 className={PROFILE_NAME_CLASS}>{profile.tag}</h1>
                        <p className={PROFILE_CONTRIBUTIONS_CLASS}>
                            {profile.contributions}
                        </p>
                    </div>
                </a>
            </div>
        );
    }

    public render(): React.ReactNode {
        let { id } = useParams() as GuildParams;

        if (!id) {
            return Profiles.renderError(id);
        }

        console.debug(`Loading profiles for ${id}`);

        let guild = Guilds.guilds.get(id);

        if (!guild) {
            return Profiles.renderError(id);
        }

        return (
            <div className={CONTENT_CLASS}>
                { guild.profiles.map(Profiles.renderProfile)}
            </div>
        )
    }
}
