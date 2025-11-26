import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
    const { slug } = params;

    const res = await fetch(`/api/images/${slug}`);
    const imgdata = await res.json();

    return {
        params,
        imgdata: imgdata.images
    };
};
