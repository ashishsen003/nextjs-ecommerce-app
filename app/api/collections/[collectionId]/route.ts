import Collection from "@/lib/models/Collection";
import dbConnect from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();
    console.log(auth());
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    await dbConnect();

    await Collection.findByIdAndDelete(params.collectionId);
    return new NextResponse("Collection deleted successfully", { status: 200 });
  } catch (error) {
    console.log("[collectionId_DELETE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async(req: NextRequest, {params}:{params:{collectionId:string}}) => {
    try {
        await dbConnect()

        const collection = await Collection.findById(params.collectionId)
        if(!collection) {
            return new NextResponse(JSON.stringify({message: "Collection not found"}), { status: 404 });
        }
        return new NextResponse(collection, { status: 200 });

    } catch (error) {
        console.log("[collectionId_GET]", error);
        return new NextResponse("Internal Server Error", { status: 500 });  
    }
}