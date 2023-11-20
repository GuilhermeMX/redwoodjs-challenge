import {
  createGraphQLHandler,
  createGraphQLMiddleware,
} from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { uploadFile } from 'src/services/upload'

const uploadMiddleware = createGraphQLMiddleware({
  context: async ({ context, request }) => {
    if (request.method === 'POST' && request.path === '/api/upload') {
      try {
        const result = await uploadFile({ request })
        context.uploadResult = result
      } catch (error) {
        console.error('Erro ao salvar o arquivo no banco de dados:', error)
        context.uploadResult = {
          success: false,
          message: 'Erro ao salvar o arquivo no banco de dados.',
        }
      }
    }
  },
})

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },

  middlewares: [uploadMiddleware],
})
