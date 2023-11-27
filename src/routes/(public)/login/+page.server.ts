import { HttpStatus } from "$lib/enums";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

        const email = formData.get("email");
        const password = formData.get("password");

        const login = await fetch("http://192.168.50.189:3001/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const headerCookies = login.headers.getSetCookie();

        if (headerCookies) {

            headerCookies.forEach((cookie) => {
                const splitCookie = cookie.split(';')[0].split("=");
                const key = splitCookie[0].trim();
                const value = splitCookie[1].trim();
                cookies.set(key, value);
            });
        }

        throw redirect(HttpStatus.FOUND, "/");
    }
}