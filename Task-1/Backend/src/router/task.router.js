import {Router} from 'express'
import { addTask, deleteTask, getTask } from '../controller/task.controller.js';

const router = Router();

router.route('/addtask').post(addTask)
router.route('/gettask').get(getTask)
router.route('/deletetask/:id').delete(deleteTask)

export default router;

