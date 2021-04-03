import { Router } from 'express'
import { createUser, login, logout } from '../controllers/auth.controller'

const router = Router()

router.post('/login', login)

router.post('/create', createUser)

router.get('/logout', logout)

export const AuthRouter = router
