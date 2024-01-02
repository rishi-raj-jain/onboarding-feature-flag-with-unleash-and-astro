import { useFlag } from '@unleash/proxy-client-react'

export default function () {
  const enabled = useFlag('onboarding')
  return (
    <>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p className="text-xs">This is an example of using Astro with Unleash Client SDK.</p>
          <p>
            <span className={['rounded px-1', enabled ? 'bg-green-100' : 'bg-red-100'].join(' ')}>{enabled ? 'Awesome' : 'Bummer'}!</span> Per the feature flag, you were{' '}
            {!enabled && <span className="rounded bg-gray-800 px-1 text-white">not</span>} redirected to the <span className="rounded bg-gray-100 px-1">onboarding</span> page.
            {enabled ? (
              <>
                {' '}
                Feel free to take a moment to appreciate the ease of setting up feature flags with <span className="rounded bg-green-900 px-1 text-white">Unleash</span>.
              </>
            ) : (
              <>
                {' '}
                Feel free to go through the docs on how to enable{' '}
                <a className="text-blue-400 underline" href="https://docs.getunleash.io/reference/activation-strategies#gradual-rollout">
                  Gradual Rollout
                </a>{' '}
                of your feature flag!
              </>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-y-4 pt-8 text-base font-semibold leading-7">
          <a href="/" className="max-w-max rounded border border-[#1a4048]/75 px-3 py-1 text-[#1a4048]/75 transition duration-200 hover:bg-[#1a4048] hover:text-white">
            &larr; Go Back
          </a>
        </div>
      </div>
    </>
  )
}
