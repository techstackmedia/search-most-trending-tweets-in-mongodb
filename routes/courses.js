import express from 'express';
import { course } from '../controllers/course.js';
const router = express.Router();

router.route('/courses').get(course);

export default router;
