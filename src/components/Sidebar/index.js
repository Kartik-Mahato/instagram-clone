import React from 'react';
import useUser from '../../hooks/use-user';
import Suggestion from './Suggestion';
import User from './User';

const Sidebar = () => {
    const { user: { docId, username, fullName, userId, following } } = useUser();

    return (
        <div className="p-4 lg:block xl:block md:hidden sm:hidden xs:hidden">
            <User username={username} fullName={fullName} />
            <Suggestion userId={userId} following={following} loggedInUserDocId={docId} />
        </div>
    )
}

export default Sidebar
