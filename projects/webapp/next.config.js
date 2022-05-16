/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['@therecordstore/library']) // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  eslint: ["pages", "components", "context", "hooks", "layouts", "locales", "modules", "services"],
  ...nextTranslate(),
}

module.exports = withTM(nextConfig)
