import { clsx } from 'clsx'
import type { CSSProperties } from 'react'

export function GrowingUnderline({
  as: Component = 'span',
  children,
  active,
  className,
  duration,
  ...rest
}: {
  children: React.ReactNode
  as?: React.ElementType
  active?: boolean
  className?: string
  duration?: number
} & React.ComponentProps<'span'>) {
  return (
    <Component
      className={clsx([
        'bg-linear-to-r bg-bottom-left bg-no-repeat',
        'transition-[background-size] duration-(--duration,200ms)',
        'from-blue-400 to-pink-400',
        'dark:from-blue-800 dark:to-purple-600',
        active
          ? 'bg-size-[100%_30%] hover:bg-size-[100%_100%]'
          : 'bg-size-[0px_30%] hover:bg-size-[100%_30%]',
        className,
      ])}
      style={{ '--duration': `${duration || 200}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Component>
  )
}
