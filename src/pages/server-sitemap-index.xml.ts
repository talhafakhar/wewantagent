import { getServerSideSitemapIndex } from 'next-sitemap'
export const getServerSideProps = async (ctx: any) => {
    return getServerSideSitemapIndex(ctx, [
        'https://wewantagent.com/server-sitemap.xml',
    ])
}

export default function SitemapIndex() {}
