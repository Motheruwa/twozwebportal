const express=require('express')
const router=express.Router()

const UploadRoute=require('./upload/UploadRoute')
const SliderRoute=require('./slider/SliderRoute')
const ServiceRoute=require('./service/ServiceRoute')
const ProjectRoute=require('./project/ProjectRoute')
const AwardRoute=require('./award/AwardRoute')

router.use('/upload',UploadRoute)
router.use('/slider',SliderRoute)
router.use('/service',ServiceRoute)
router.use('/project',ProjectRoute)
router.use('/award',AwardRoute)

module.exports=router
