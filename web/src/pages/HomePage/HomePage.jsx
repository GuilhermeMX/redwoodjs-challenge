import { MetaTags } from '@redwoodjs/web'

import Dropzone from 'src/components/dropzone'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <h1>Upload your file!</h1>

        <Dropzone />
      </MainLayout>
      <MetaTags title="Home" description="Home page" />
    </>
  )
}

export default HomePage
