import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { HttpStatus } from '$lib/enums';

export const load: LayoutServerLoad = async ({ route,locals }) => {

    const path = route.id as string;
    const publicPathRegex = /(public)/;
    const session = locals.getSession();

    if (!publicPathRegex.test(path) && !session) {
        throw redirect(HttpStatus.PERMANENT_REDIRECT, `/login`);
    }

    return {
        session,
    };
}
