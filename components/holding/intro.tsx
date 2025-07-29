import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">Emily Christy</span> - a creative
      fullstack software engineer in England.
      {/* <span className="hidden font-medium">England</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-united-kingdom" />
      </span> */}
    </h1>
  )
}
