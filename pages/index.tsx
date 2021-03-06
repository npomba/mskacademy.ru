import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { PagesPageHome } from '@/components/pages'

const PageHome: NextPage<TypePageHomeProps> = ({ programs }) => {
  usePageHandleContext({ programs })

  return <PagesPageHome />
}

export default PageHome

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
