
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'i.ibb.co.com','10.0.80.85','10.0.80.85:5000'],
       
    },
};

export default withNextIntl(nextConfig);
