export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About US',
    description: 'We are a test website'

}

export default async function About(){

    return(
        <main className="flex flex-col gap-2 p-4">
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>You can learn more about me here.</p>
            <a href="https://www.linkedin.com/in/your-linkedin-profile-url/">LinkedIn Profile</a>
            <a href="https://github.com/your-github-username/">GitHub Profile</a>
            <a href="https://www.instagram.com/your-instagram-username/">Instagram Profile</a>
            <a href="https://www.facebook.com/your-facebook-profile/">Facebook Profile</a>
            <a href="https://www.twitter.com/your-twitter-username/">Twitter Profile</a>
            <a href="https://www.pinterest.com/your-pinterest-username/">Pinterest Profile</a>
            <a href="https://www.reddit.com/user">Reddit Profile</a>
        </main>
    )
}