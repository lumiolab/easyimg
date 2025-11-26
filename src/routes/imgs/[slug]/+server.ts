import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const GET: RequestHandler = ({ params }) => {
    const { slug } = params;

    const userDir = path.resolve(`static/uploads/${slug}`);

    if (!fs.existsSync(userDir)) {
        return new Response(JSON.stringify({ images: [] }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const files = fs.readdirSync(userDir).filter(f => {
        const ext = path.extname(f).toLowerCase();
        return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    });
    const imagePaths = files.map(f => `/uploads/${slug}/${f}`);

    return new Response(JSON.stringify({ images: imagePaths }), {
        headers: { 'Content-Type': 'application/json' }
    });
};
