declare namespace Express {
  interface FlashFields {
    __flash: { msg: string; type: 'error' | 'info' } | undefined
  }
  export interface Request {
    flash(msg: string | undefined, type: 'error' | 'info' | undefined): void
    flash(): { msg: string; type: 'error' | 'info' } | undefined
    session: import('express-session').Session &
      Partial<import('express-session').SessionData> &
      FlashFields
  }
}
