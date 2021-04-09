const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})
// Load Book model
const Memory = require('../models/Memory')

router.get('/', async (req, res) => {
  const memory = await Memory.find()
  res.send(memory)
})

router.get('/:id', (req, res) => {
  Memory.findById(req.params.id)
    .then(memory => res.json(memory))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
})

router.post('/', upload.single('productImage'), async (req, res, next) => {
  console.log(req.file)
  let memory = new Memory({
    title: req.body.title,
    creator: req.body.creator,
    message: req.body.message,
    productImage: req.file.path
  })
  memory = await memory.save()
  .then(doc=>{
    res.status(201).json({
        message:"Profile Image Updated Successfully",
        results:doc
    });
 })

 
})

router.put('/:id', (req, res) => {
  Memory.findByIdAndUpdate(req.params.id, req.body)
    .then(memory => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    )
})

router.delete('/:id', (req, res) => {
  Memory.findByIdAndRemove(req.params.id, req.body)
    .then(memory => res.json({ mgs: 'Memory entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a memory' }))
})

module.exports = router
