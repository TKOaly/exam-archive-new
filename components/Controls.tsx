import React from 'react'

interface LogoutProps {
  username: string
}

const Logout = ({ username }: LogoutProps) => {
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
