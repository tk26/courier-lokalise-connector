import type { IntegrationConfig } from 'src/types'

// API key flow
const validate = async (config: IntegrationConfig) => {
  return Promise.resolve({
    key: config.apiKey,
  })
}

// OAuth flow (N/A for Courier)
const generateAuthorizationUrl = async () => {
  return Promise.resolve({
    url: 'https://example.io',
  })
}

const refresh = async () => {
  return Promise.resolve({
    key: 'apiKey',
  })
}

const getAuthCredentials = async () => {
  return Promise.resolve({
    accessToken: 'accessToken',
    expiresIn: 2000,
    refreshToken: 'refreshToken',
  })
}

const authService = {
  validate,
  refresh,
  getAuthCredentials,
  generateAuthorizationUrl,
}

export default authService
