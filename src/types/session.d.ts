// it just works
// https://stackoverflow.com/a/65805410
declare module 'express-session' {
  export interface SessionData {
    __flash: { msg: string; type: 'error' | 'info' } | undefined
  }
}

export {}
