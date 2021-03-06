import {GetStaticPropsResult} from 'next'
import HeroPage from '../components/HeroPage'
import Logo from '../components/icons/Logo'
import withReportsNav, {PropsWithReportsNav} from '../components/withReportsNav'
import {getLatestReportsData} from '../lib/reports'

type Props = PropsWithReportsNav<unknown>

export default withReportsNav(function IndexPage(props: Props) {
  return <HeroPage icon={Logo} title="Report Viewer" />
})

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const reportNames = Object.keys(await getLatestReportsData())

  return {
    props: {
      reportName: null,
      reportNames
    }
  }
}
