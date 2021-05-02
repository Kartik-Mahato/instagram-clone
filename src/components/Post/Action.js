import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

const Action = ({ docId, totalLikes, likedPhoto, handleFocus }) => {
    const { user: { uid: userId = '' } } = useContext(UserContext);
    const [toggleLiked, setToggleLiked] = useState(likedPhoto);
    const [likes, setLikes] = useState(totalLikes);
    const { firebase, FieldValue } = useContext(FirebaseContext);

    const handleToggleLiked = async () => {
        setToggleLiked((toggleLiked) => !toggleLiked);

        await firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: toggleLiked ? firebase.firebase_.firestore.FieldValue.arrayRemove(userId) : firebase.firebase_.firestore.FieldValue.arrayUnion(userId)
            });

        setLikes(likes => toggleLiked ? likes + 1 : likes - 1);
    };

    return (
        <>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <svg
                        onDoubleClick={handleToggleLiked}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleToggleLiked();
                            }
                        }}
                        xmlns="http://w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                        className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${toggleLiked ? 'fill-red text-red-primary' : 'text-black-light'}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <div className="w-8 flex items-center text-black-light select-none cursor-pointer focus:outline-none">
                        <img
                            src="/images/comment.svg"
                            alt="comment"
                            className="w-full"
                            onClick={handleFocus}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    handleFocus();
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 py-0">
                <p className="font-bold">{likes === 1 ? `${likes} like` : `${likes} like`}</p>
            </div>
        </>
    )
}

export default Action

Action.propTypes = {
    docId: PropTypes.string.isRequired,
    likedPhoto: PropTypes.bool.isRequired,
    totalLikes: PropTypes.number.isRequired,
    handleFocus: PropTypes.func.isRequired
}
