import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getUserPhotosByUsername } from '../../services/firebase';
import Header from './Header';
import Photos from './Photos';

const reducer = (state, newstate) => ({ ...state, ...newstate });
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
}

const UserProfile = ({ user }) => {
    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = await getUserPhotosByUsername(user.username);

            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
        }

        getProfileInfoAndPhotos();

    }, [user.username]);

    return (
        <>
            <Header
                photosCount={photosCollection ? photosCollection.length : 0}
                profile={profile}
                followerCount={followerCount}
                setFollowerCount={dispatch}
            />
            <Photos photos={photosCollection} />
        </>
    )
}

export default UserProfile

UserProfile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.string.isRequired,
        followers: PropTypes.array,
        following: PropTypes.array,
        fullName: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
}
