import {Router} from 'express'
import { getBlog, getSpecificBlog, setBlog } from '../controller/blog.controller.js';

const router = Router();

router.route('/setblog').post(setBlog);
router.route('/getblog').get(getBlog);
router.route('/getblog/:id').get(getSpecificBlog)

export default router;