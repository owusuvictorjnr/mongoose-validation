const router = require('express').Router;
const {
  createPost,
  getAllPost,
  getSinglePost,
  deletePost,
  updatePost,
} = require('./post.controller');
const { authRequired } = require('../middlewares/auth.required');

const postRouter = router();
postRouter.route('/').all(authRequired).get(getAllPost).post(createPost);
postRouter
  .route('/:postId')
  .all(authRequired)
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = postRouter;
