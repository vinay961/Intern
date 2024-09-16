import {Router} from 'express'
import { addTask, getTask } from '../controller/task.controller.js';

const router = Router();

router.route('/addtask').post(addTask)
router.route('/gettask').get(getTask)

export default router;

