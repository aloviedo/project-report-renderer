import {GetStaticPropsResult} from 'next'
import {useContext} from 'react'
import Logo from '../components/icons/Logo'
import withReportsNav, {PropsWithReportsNav} from '../components/withReportsNav'
import {getLatestReportsData} from '../lib/reports'
import {SelectReportContext} from './_app'

type Props = PropsWithReportsNav<unknown>

export default withReportsNav(function IndexPage(props: Props) {
  const {setShowReportSelector} = useContext(SelectReportContext)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-xl text-sm text-gray">
        <h1 className="flex items-center text-6xl mb-2 -ml-3 text-black">
          <Logo className="inline-block w-16 mr-4" />
          Report Viewer
        </h1>

        <p className="mb-4">
          This application renders reports generated by{' '}
          <a
            className="text-black font-semibold hover:underline"
            href="https://github.com/bryanmacfarlane/project-reports-action"
          >
            bryanmacfarlane/project-reports-action
          </a>{' '}
          using{' '}
          <a
            className="text-black font-semibold hover:underline"
            href="https://github.com/bbq-beets/project-report-renderer"
          >
            bbq-beets/project-report-renderer
          </a>
          .
        </p>

        <p>
          Select a report using the{' '}
          <span
            onClick={() => setShowReportSelector(open => !open)}
            className="text-black font-semibold cursor-pointer"
          >
            &ldquo;Select a Report&rdquo;
          </span>{' '}
          menu at the top right.
        </p>
      </div>
    </div>
  )
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
