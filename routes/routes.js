import express from 'express';
export const router=express.Router();
import {addTemplate, getTemplate, homeRoute} from '../Controller/adminController.js'
import { addReport, getReport } from '../Controller/ReportController.js';
router.get('/',homeRoute);

router.get('/template',getTemplate)
router.post('/template',addTemplate)
router.get('/report/:rep_name',getReport)
router.post('/report/:rep_name',addReport)

