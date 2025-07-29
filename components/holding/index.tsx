import { Container } from '~/components/ui/container'
import { SITE_METADATA } from '~/data/site-metadata'
import { GrowingUnderline } from '../ui/growing-underline'
import { Link } from '../ui/link'
import { Greeting } from './greeting'
import { Intro } from './intro'

export function Holding() {
  return (
    <Container as="div" className="space-y-6 pt-4 md:space-y-24 lg:pt-12">
      <div className="pt-6 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 md:text-lg md:leading-8 dark:text-gray-400">
            <Intro />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">
                I'm busy collating some of my past side projects which I'll soon
                be adding here. For now, here's my&nbsp;
                <Link
                  href={SITE_METADATA.linkedin}
                  className="font-semibold text-gray-900! no-underline hover:text-gray-900 dark:text-white! dark:hover:text-white"
                >
                  <GrowingUnderline>LinkedIn</GrowingUnderline>
                </Link>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
