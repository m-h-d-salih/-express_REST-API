import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controller/userController.js';
import { getPosts } from '../controller/postController.js';

const router=express.Router();

router.route('/user/register')
.post(createUser)
router.route('/user')
.get(getUsers)

router.route('/user/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

router.route('/posts')
.get(getPosts)

export {router}