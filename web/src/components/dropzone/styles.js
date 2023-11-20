import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const IframeBox = styled.iframe`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #aaa;

  @media (min-width: 769px) {
    width: 50%;
  }
`

export const AceptedFiles = styled.div`
  width: 100%;
  padding: 1rem;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;

  @media (min-width: 769px) {
    width: 50%;
    border-top: none;
    margin-top: 0;
  }
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
