// api/src/services/uploads/uploads.js
import { uploadPostFile } from 'src/lib/multer'

export const uploads = () => {
  return 'Este é o serviço de uploads.'
}

export const uploadFile = async ({ request }) => {
  const { file } = request

  return { success: true, message: 'Arquivo enviado com sucesso!', file }
}

export const beforeResolver = (rules) => {
  rules.uploadFile = uploadPostFile
}
