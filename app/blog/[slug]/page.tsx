import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
export const revalidate = 420;

interface IPost {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: {slug: string};
}

export async function generateStaticParams(){
    const posts: IPost[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    )

    return posts.map((post) => ({params: { slug: post.slug }}))
}

export default async function BlogPostPage({params}: Props){
    const session = await getServerSession(authOptions);
  
    if(!session){
      redirect('/api/auth/signin')
    }


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