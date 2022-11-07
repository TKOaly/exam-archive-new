declare namespace Express {
  export interface Request {
    flash(msg: string | undefined, type: 'error' | 'info' | undefined): void
    flash(): { msg: string; type: 'error' | 'info' } | undefined
  }
}
