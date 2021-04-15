import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ text }) => {
    return (
        <div>
            <h1 style={HeaderStyle}>{text}</h1>
        </div>
    )
}

Header.defaultProps = {
    text:'Task Tracker'
}
Header.propTypes = {
    text: PropTypes.string.isRequired,
}

const HeaderStyle = {
    color: 'cyan'
}

export default Header
