import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image, caption }) => {
    return (
        <img src={image} alt={caption} />
    )
}

export default Image

Image.propTypes = {
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}