import { Request, Response } from 'express-serve-static-core'

export const getList = (req: Request, res: Response): void => {
  res.json({ message: 'this is list' })
}
