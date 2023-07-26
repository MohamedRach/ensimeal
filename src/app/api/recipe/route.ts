
import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('id') || 0;
    const id = +q
    if(typeof q !== "string"){
        throw new Error("Invalid request")
    }
    const meal = await prisma.recipe.findMany({
        where: {
            id: id
        }
    })
    console.log(meal)
    return  NextResponse.json({meal})
    //return new Response(q)
    
}