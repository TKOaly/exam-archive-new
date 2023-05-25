import { getSession } from '@lib/sessions'

const Logout = async () => {
  const { user } = await getSession()
  return (
    <div className="log-out">
      Logged in: {user.username} (
      <a className="log-out__link" href="/auth/signout">
        Log out
      </a>
      )
    </div>
  )
}

interface ControlsBoxProps {
  children: React.ReactNode
}

const ControlsBox = ({ children }: ControlsBoxProps) => {
  return (
    <div className="controls" data-test-id="controls">
      {children}
    </div>
  )
}

export { Logout, ControlsBox }
