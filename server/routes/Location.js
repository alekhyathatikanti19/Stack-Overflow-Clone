import express from "express"
import {SignupForm} from '../controllers/Location'
import auth from '../middlewares/auth.js'
import { Router, Route } from 'react-router'

const router= express.Router();

router.post('/signup', signup);

export default router