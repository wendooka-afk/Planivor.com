/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // jsPDF optionally imports canvg and dompurify for SVG support — we don't use that feature
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvg: false,
      dompurify: false,
    }
    return config
  },
}

module.exports = nextConfig
