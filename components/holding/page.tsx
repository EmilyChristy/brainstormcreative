import { Holding } from '~/components/holding'
import { SITE_METADATA } from '~/data/site-metadata'

// const GITHUB_USER = SITE_METADATA.github.split("/").pop();

export default async function HomePage() {
  return (
    <Holding />
    // <Home
    //   posts={allCoreContent(sortPosts(allBlogs)).slice(0, MAX_POSTS_DISPLAY)}
    //   snippets={allCoreContent(sortPosts(allSnippets)).slice(
    //     0,
    //     MAX_SNIPPETS_DISPLAY,
    //   )}
    //   currentlyReading={
    //     currentlyReadingBook.status === 'fulfilled'
    //       ? currentlyReadingBook.value
    //       : null
    //   }
    //   lastWatchedMovie={
    //     lastWatchedMovie.status === 'fulfilled' ? lastWatchedMovie.value : null
    //   }
    //   recentlyPlayed={
    //     recentlyPlayed.status === 'fulfilled'
    //       ? recentlyPlayed.value
    //       : { ok: false, error: 'Failed to fetch recently played data.' }
    //   }
    //   githubActivities={
    //     githubActivities.status === 'fulfilled' ? githubActivities.value : null
    //   }
    // />
  )
}
