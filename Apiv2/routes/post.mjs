
import express from 'express';
let router = express.Router()




router.get('/posts/:userId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post v2');
})


router.post('/post', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post v2');
})


// PUT     /api/v1/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post deleted');
})

export default router
