import { serveFile, serveDir } from "jsr:@std/http/file-server";

function handler() {

	let url = new URL(request.url)

	const headerCORS = new Headers()

	headerCORS.set("Access-Control-Allow-Origin", "*");
	headerCORS.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	headerCORS.set("Access-Control-Allow-Headers", "Content-Type");
	if (request.method == "OPTIONS") {
		return new Response(null, { headers: headerCORS })
	}

    return serveDir(request, {
		fsRoot: "/",
		urlRoot: "",
		showDirListing: false
	});

}

Deno.serve(handler);