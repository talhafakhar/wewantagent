import type {GetStaticPaths, GetStaticProps} from 'next';
import {getBlogBySlug, getLatestSlugs} from '@/lib/strapi';
import type {BlogPost} from '@/types/blog';
import BlogDetail from '@/components/Blog/BlogDetail';
type Props = { blog: BlogPost };
export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const slugs = await getLatestSlugs(50);
        return {paths: slugs.map((slug) => ({params: {slug}})), fallback: 'blocking'};
    } catch {
        return {paths: [], fallback: 'blocking'};
    }
};
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const slug = String(params!.slug);
    const blog = await getBlogBySlug(slug);
    if (!blog) return {notFound: true, revalidate: 60};
    return {props: {blog}, revalidate: 300};
};

export default function BlogPostPage({blog}: Props) {

    return (
        <>
            <BlogDetail blog={blog}/>

        </>
    );
}
