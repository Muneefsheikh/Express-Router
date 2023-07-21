import express from 'express';
let router = express.Router()


router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('get comment v1');
})

router.get('/comments/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('get comments v1');
})

router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('put comment v1');
})

router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('delete comment v1');
})

export default router
