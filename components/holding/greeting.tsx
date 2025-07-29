import clsx from 'clsx'

export function Greeting() {
  return (
    <div
      className={clsx(
        'font-greeting font-extrabold tracking-tight',
        'text-[30px] leading-[60px] md:text-[48px] md:leading-[100px]',
        'bg-clip-text text-transparent',
        'bg-linear-to-l from-blue-500 to-blue-700',
        'dark:bg-linear-to-l dark:from-emerald-500 dark:to-lime-600',
      )}
    >
      Hello.
    </div>
  )
}
