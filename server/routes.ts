import express from 'express'
import emailBD from './model'

const router = express.Router()

router.get('/', async (req, res) => {
  const emails = await emailBD.find()
  res.send(emails)
})
router.post('/', async (req, res) => {
  const email = await emailBD.create(req.body)
  res.send(email)
})

export default router
