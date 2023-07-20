import classNames from 'classnames'

const Input = ({
  name,
  title,
  placeholder,
  defaultValue,
  className
}: {
  name: string
  title: string
  placeholder?: string
  defaultValue?: string
  className?: string
}) => {
  const classes = classNames(
    className,
    'ring ring-gray-800 focus:ring-gray-400 ring-inset p-3 my-2 box-border shadow-lg'
  )
  return (
    <input
      type="text"
      className={classes}
      name={name}
      aria-label={title}
      title={title}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

export default Input
