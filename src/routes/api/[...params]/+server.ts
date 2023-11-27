import { json, type ServerLoad } from "@sveltejs/kit"
import { API_URL } from "$env/static/private"

export const GET: ServerLoad = async ({ fetch, url, params }) => {
	return json(
		await fetch(API_URL + params.params + url.search, {credentials: 'include'}).then(r => r.json())
	);
}
