import React from 'react';
import { withRouter } from 'react-router';
import '../css/index.css';
import '../css/Guild.css';
import {
    LIST_CLASS,
    LIST_NAME_CLASS,
    LIST_ICON_CLASS,
    LIST_DETAILS_CLASS,
    LIST_COUNT_CLASS,
} from '..';
import { Profile } from '../models/Profile';
import GuildStore from '../models/GuildStore';
import Guilds from './Guilds';


type GuildParams = {
    id?: number,
}

class Profiles extends React.Component<any, any> {
    private static renderError(guildID?: number) {
        return (
            <p>Failed to load users in guild {guildID || 'undefined'}</p>
        );
    }

    private static renderProfile(profile: Profile): React.ReactNode {
        return (
            <div className={LIST_CLASS}>
                <a href={`https://github.com/${profile.github}`}>
                    <img className={LIST_ICON_CLASS} src={profile.avatar_url} />
                    <div className={LIST_DETAILS_CLASS}>
                        <h1 className={LIST_NAME_CLASS}>{profile.tag}</h1>
                        <p className={LIST_COUNT_CLASS}>
                            {profile.contributions}
                        </p>
                    </div>
                </a>
            </div>
        );
    }

    public render(): React.ReactNode {
        let { id } = this.props.match.params as GuildParams;

        if (!id) {
            return Profiles.renderError(id);
        }

        console.debug(`Loading profiles for '${id}'`);

        let guild = GuildStore.getGuild(id);

        if (!guild) {
            return Profiles.renderError(id);
        }

        return (
            <div>
                { Guilds.renderGuild(guild) }
                { guild.profiles.map(Profiles.renderProfile)}
            </div>
        )
    }
}

export default withRouter(Profiles);
