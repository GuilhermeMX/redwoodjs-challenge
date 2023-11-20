// api/src/lib/multer.js
import path from 'path'

import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err)

      const filename = `${hash.toString('hex')}-${file.originalname}`
      cb(null, filename)
    })
  },
})

const limits = {
  fileSize: 2 * 1024 * 1024,
}

const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif']

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Invalid file type'))
  }
}

const multerConfig = multer({ storage, limits, fileFilter })

export default multerConfig
