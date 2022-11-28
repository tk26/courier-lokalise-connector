import 'dotenv/config'

const config = {
  app: {
    env: process.env.APP_ENV || 'production',
    port: process.env.APP_PORT || '3000',
    courierUrl: process.env.COURIER_URL || 'https://api.courier.com',
  },
}

export default config
