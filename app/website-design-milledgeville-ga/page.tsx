import type { Metadata } from 'next'
import LocalSeoPage from '@/components/LocalSeoPage'
import { localSeoPagesBySlug } from '@/lib/localSeoPages'

const page = localSeoPagesBySlug['website-design-milledgeville-ga']

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.title,
    description: page.description,
    type: 'website',
    url: `https://www.syfernetics.com/${page.slug}`,
  },
}

export default function Page() {
  return <LocalSeoPage page={page} />
}
