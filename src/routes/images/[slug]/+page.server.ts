import type { RequestHandler } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    
    const { slug } = params;
    console.log("User backend: ", slug)
    const res = await fetch(`http://localhost:5173/imgs/${slug}`);
    const imgdata = await res.json();
    console.log("data: ", imgdata)
    return {params: params, imgdata: imgdata.images}
};
