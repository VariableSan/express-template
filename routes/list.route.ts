import passport from 'passport'
import { getList } from '../controllers/list.controller'
import { Router } from 'express'

const router = Router()

/* /list */
router.get('/', passport.authenticate('jwt', { session: false }), getList)

export const ListRouter = router
