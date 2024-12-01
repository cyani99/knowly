import Link from "next/link";

interface IPost {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: {slug: string};
}

export default async function BlogPostPage({params}: Props){

    const posts: IPost[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    )

    const post = posts.find((post)=> post.slug === params.slug)!;

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/">Back to Home</Link>  {/* Assuming Link component is defined */} 
        </div>
    )

    
}