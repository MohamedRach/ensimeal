import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if(typeof q !== "string"){
        throw new Error("Invalid request")
    }
    const meals = await prisma.recipe.findMany({
        where: {
            title:{
                contains:q,
                mode: "insensitive"
                
            }
        }
    })
    console.log(meals)
    return  NextResponse.json({meals})
    //return new Response(q)
    
}