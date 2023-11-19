import React, { useState } from 'react'

import { useDropzone } from 'react-dropzone'

import {
  AceptedFiles,
  DragContainer,
  FilesContainer,
  FilesPreview,
  RegectedFiles,
  IframeBox,
  Container,
} from './styles'

const Dropzone = () => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      // implementando máximo de arquivos
      maxFiles: 2,
      //implelentando tipo de arquivos aceitos
      accept: {
        'image/png': ['.png'],
        'text/html': ['.html', '.htm'],
      },
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles)
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
    })

  // fazendo a preview, use <img src={file.preview} /> para imagens
  const Preview = files.map((file) => (
    <div key={file.name}>
      <IframeBox src={file.preview} />
    </div>
  ))

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ))
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return <li key={file.name}>{file.name}</li>
  })
  return (
    <Container>
      <DragContainer {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drop some files here ...</p>
      </DragContainer>
      <FilesContainer>
        <AceptedFiles>Arquivos aceitos {acceptedFileItems}</AceptedFiles>
        <RegectedFiles>Arquivos rejeitados {fileRejectionItems}</RegectedFiles>
      </FilesContainer>
      <FilesPreview>{Preview}</FilesPreview>
    </Container>
  )
}

export default Dropzone
