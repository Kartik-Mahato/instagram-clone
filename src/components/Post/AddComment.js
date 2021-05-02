import React, { useContext, useState } from 'react'
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';
import PropTypes from 'prop-types';

const AddComment = ({ docId, comments, setComments, commentInput }) => {
    const [comment, setComment] = useState('');
    const { firebase } = useContext(FirebaseContext);
    const {
        user: { displayName }
    } = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();

        setComments([{ displayName, comment }, ...comments]);
        setComment('');

        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: firebase.firebase_.firestore.FieldValue.arrayUnion({ displayName, comment })
            });
    };

    return (
        <div className="border-t border-gray-primary">
            <form
                className="flex justify-between pl-0 pr-5"
                method="POST"
                onSubmit={(e) => comment.length >= 1 ? handleSubmit(e) : e.preventDefault()}
            >
                <input
                    type="text"
                    aria-label="Add a comment"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="add-comment"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    ref={commentInput}
                />
                <button
                    type="button"
                    className={`text-sm font-bold text-blue-medium ${!comment && 'opacity-25'}`}
                    disabled={comment.length < 1}
                    onClick={handleSubmit}
                >
                    POST
                </button>
            </form>
        </div>
    )
}

export default AddComment

AddComment.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
    commentInput: PropTypes.object.isRequired
}