
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'i.ibb.co.com'],
       
    },
};

export default withNextIntl(nextConfig);
