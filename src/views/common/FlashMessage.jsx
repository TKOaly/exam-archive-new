const React = require('react')
const classnames = require('classnames')

const FlashMessage = ({ flash: { msg, type } }) => {
  type = type || 'info'
  return (
    <div
      role="alert"
      className={classnames('flash-message', `flash-message--${type}`)}
    >
      {msg}
    </div>
  )
}

const FlashContainer = ({ flash }) =>
  flash && flash.msg ? <FlashMessage flash={flash} /> : null

module.exports = FlashContainer
