import classnames from 'classnames'

interface FlashMessage {
  msg: string
  type: string
}

const FlashMessage = ({ flash }: { flash: FlashMessage }) => {
  const type = flash.type || 'info'
  return (
    <div
      role="alert"
      className={classnames('flash-message', `flash-message--${type}`)}
    >
      {flash.msg}
    </div>
  )
}

const FlashContainer = ({ flash }: { flash: FlashMessage }) =>
  flash && flash.msg ? <FlashMessage flash={flash} /> : null

export default FlashContainer
