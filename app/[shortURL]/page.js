import { redirect } from "next/navigation"
import { readDatabase } from "@/lib/database"
export default async function Page({ params }) {
    const shortURL = (await params).shortURL;
    let d= await readDatabase();
    const data=[...d]

    const doc = data.find((item) => item.shortUrl === shortURL);
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }


}

