import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.getSession = () => {
        const { cookies } = event;
        const session = cookies.get("s.id");

        if (!session) {
            return null;
        }

        const jwtPayload = session.split(".")[1]

        const payload = Buffer.from(jwtPayload, "base64").toString("utf-8");

        const { id } = JSON.parse(payload);

        if (!id) {
            return null;
        }

        return {
            id: id,
        }
    }

    return resolve(event);
}