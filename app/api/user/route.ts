import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';

export async function PUT(req: Request){
    const session = await getServerSession(authOptions);

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const currentUserEmail = session?.user?.email!;

    const data = await req.json();
    data.age = Number(data.age);

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        }, 
        data,
    });

    return NextResponse.json(user);
}