/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // knex does not like to work webpack as webpack tries to find all these optional libraries: https://stackoverflow.com/a/68075197
    config.externals = config.externals.concat([
      'tedious',
      'better-sqlite3',
      'mysql',
      'mysql2',
      'oracledb',
      'sqlite3',
      'pg-native',
      'pg-query-stream'
    ])
    return config
  }
}

module.exports = nextConfig
