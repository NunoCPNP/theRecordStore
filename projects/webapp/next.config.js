/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['@therecordstore/library']) // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
}

module.exports = withTM(nextConfig)
