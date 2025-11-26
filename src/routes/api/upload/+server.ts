import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export async function POST({ request }) {
    const form = await request.formData();
    const user = form.get("user"); // you pass this from frontend
    const file = form.get("file");

    if (!(file instanceof File)) {
        return new Response("No file uploaded", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);


    const filename = randomUUID() + "-" + file.name;
    const userFolder = path.join("static", "uploads", user! as string);

    if (!fs.existsSync(userFolder)) {
        fs.mkdirSync(userFolder, { recursive: true });
    }

    const filePath = path.join(userFolder, filename);

    fs.writeFileSync(filePath, uint8);

    return new Response(
        JSON.stringify({
            url: `/uploads/${user}/${filename}`
        }),
        { status: 200 }
    );
}
