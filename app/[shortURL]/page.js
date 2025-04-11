import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const shortURL = (await params).shortURL;

    const client = await clientPromise;
    const db = client.db("URLShortener")
    const collection = db.collection("URLs")
    const doc = await collection.findOne({ shortUrl: shortURL });
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
    // if (doc){
    //     redirect(doc.url)
    // }
    // else{
    //     redirect(`${NEXT_PUBLIC_HOST}`)
    // }
    // return <div>My Post :{url}</div>

}

