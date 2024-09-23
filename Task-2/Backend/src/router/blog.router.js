import {Router} from 'express'
import { getBlog, setBlog } from '../controller/blog.controller.js';

const router = Router();

router.route('/setblog').post(setBlog);
router.route('/getblog').get(getBlog);

export default router;