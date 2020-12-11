import React from 'react';
import { Profile } from '../models/Profile';
import {
    LIST_CLASS,
    LIST_ICON_CLASS,
    LIST_NAME_CLASS,
    LIST_DESC_CLASS,
    LIST_DETAILS_CLASS,
} from '../constants';


/**
 * @class Render
 * The render class has static methods which are used to render different
 * models (see src/models). Each method name represents the model that the
 * method is rendering.
 */
export default class Render {
    /**
     * @method profile
     * @param {Profile} profile
     * @returns {React.ReactNode}
     */
    public static profile(profile: Profile): React.ReactNode {
        return (
            <a href={`https://github.com/${profile.github}`}>
                <div className={LIST_CLASS}>
                    <img alt="User's profile"
                        className={LIST_ICON_CLASS}
                        src={profile.avatar_url} />
                    <div className={LIST_DETAILS_CLASS}>
                        <h1 className={LIST_NAME_CLASS}>{profile.tag}</h1>
                        <p className={LIST_DESC_CLASS}>
                            {profile.contributions}
                        </p>
                    </div>
                    <p></p>
                </div>
            </a>
        );
    }
}
