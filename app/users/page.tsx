import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users(){
    const users = await prisma.user.findMany();

    return (
        <div className="flex flex-row gap-2 p-2">
            {users.map((user) => {
                return <UserCard key={user.id} {...user}/>
            })}
        </div>
    )
}