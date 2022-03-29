import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { PagesPageHome } from '@/components/pages'

const PageProgram: NextPage<TypePageHomeProps> = ({ programs }) => {
  usePageHandleContext({ programs })

  return <PagesPageHome />
}

export default PageProgram

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
