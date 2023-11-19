import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const IframeBox = styled.iframe`
  width: 100%;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export const FilesPreview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const RegectedFiles = styled.div`
  width: 50%;
  padding: 0 10px;
`

export const AceptedFiles = styled.div`
  width: 50%;
  padding: 0 10px;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #aaa;
`

export const FilesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
`

export const DragContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px 10px;
  border: 2px dotted #aaa;
  border-radius: 10px;
  background-color: #eee;
  text-align: center;
`
