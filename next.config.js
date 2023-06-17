/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    // Bind to `0.0.0.0` to listen on all available network interfaces
    // This is necessary to allow connections from devices in the local network
    host: '0.0.0.0',
  }
}

module.exports = nextConfig
