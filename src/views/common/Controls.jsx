const React = require('react')
const PropTypes = require('prop-types')

const Logout = ({ username }) => {
  return (
    <div className="log-out">
      Logged in: {username} (
      <a className="log-out__link" href="/logout">
        Log out
      </a>
      )
    </div>
  )
}

Logout.propTypes = {
  username: PropTypes.string.isRequired
}

const ControlsBox = ({ children }) => {
  return (
    <div className="controls" data-test-id="controls">
      {children}
    </div>
  )
}

ControlsBox.propTypes = {
  children: PropTypes.node
}

module.exports = {
  Logout,
  ControlsBox
}
