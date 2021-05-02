import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './Post';

const Timeline = () => {
    const { photos } = usePhotos();

    return (
        <div className="container lg:col-span-2 xl:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3 md:mx-auto sm:mx-auto xs:mx-auto">
            {
                !photos ? (
                    <>
                        {[...new Array(4)].map((_, index) => (
                            <Skeleton key={index} count={1} width={640} height={400} className="mb-5" />
                        ))}
                    </>
                ) : photos?.length > 0 ? (
                    photos.map((content) => <Post key={content.docId} content={content} />)
                ) : (
                    <p className="text-center text-2xl">Follow people to see photos</p>
                )
            }
        </div>
    )
}

export default Timeline

