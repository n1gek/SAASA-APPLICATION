import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const videos = await prisma.video.findMany({
            orderBy: {createdAt: 'desc'},
        });
        return NextResponse.json(videos);
        
    } catch (error) {
        return NextResponse.json({"Error fetching videos": error}, {status: 500});
        
    } finally {
        await prisma.$disconnect();
    }
}
