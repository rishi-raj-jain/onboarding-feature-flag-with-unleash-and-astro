import Dashboard from './Dashboard'
import { FlagProvider } from '@unleash/proxy-client-react'

const unleashConfig = {
  // How often (in seconds) the client should poll the proxy for updates
  refreshInterval: 1,
  // The name of your application. It's only used for identifying your application
  appName: 'onboarding',
  // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  url: 'http://localhost:4242/api/frontend',
  // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  clientKey: 'default:development.unleash-insecure-frontend-api-token',
}

export default function () {
  return (
    <FlagProvider config={unleashConfig}>
      <Dashboard />
    </FlagProvider>
  )
}
