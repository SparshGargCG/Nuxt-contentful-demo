import config from './nuxt.config'

delete config.mode // remove mode

export default {
  ...config,
  ssr: false,
}
