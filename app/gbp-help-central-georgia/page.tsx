import type { Metadata } from 'next'
import LocalSeoPage from '@/components/LocalSeoPage'
import { localSeoPagesBySlug } from '@/lib/localSeoPages'

const page = localSeoPagesBySlug['google-business-profile-help-central-georgia']

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/gbp-help-central-georgia' },
}

export default function Page() {
  return <LocalSeoPage page={{ ...page, slug: 'gbp-help-central-georgia' }} />
}
