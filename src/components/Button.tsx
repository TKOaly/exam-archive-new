import classNames from 'classnames'

const Button = ({
  variant = 'primary',
  type,
  name,
  title,
  text,
  className,
  onClick
}: {
  variant?: 'primary' | 'outline' | 'text'
  type?: 'button' | 'submit' | 'reset'
  name: string
  title: string
  text?: string
  className?: string
  onClick?: () => void
}) => {
  const variants = {
    primary:
      'bg-gray-800 hover:bg-gray-600 focus:ring focus:ring-gray-400 ring-inset text-white font-serif lowercase p-3 box-border shadow-lg',
    outline:
      'bg-transparent hover:bg-gray-600 ring ring-gray-800 focus:ring-gray-400 ring-inset text-gray-800 font-serif hover:text-white lowercase p-3 box-border shadow-lg',
    text: 'bg-transparent text-gray-800 hover:underline hover:decoration-cyan-500'
  }

  const classes = classNames(className, variants[variant])
  return (
    <button
      type={type}
      className={classes}
      name={name}
      aria-label={title}
      title={title}
      onClick={onClick}
    >
      {text || title}
    </button>
  )
}

export default Button
