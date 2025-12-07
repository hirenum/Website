import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow specific paths if needed
        // disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://hirenum.com/sitemap.xml',
  }
}
