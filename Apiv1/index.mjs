import express from 'express';
let router = express.Router()


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'



router.use(authRouter)



router.use("/api/v1", commentRouter)
router.use("/api/v1", postRouter)
router.use("/api/v1", feedRouter)



export default router
