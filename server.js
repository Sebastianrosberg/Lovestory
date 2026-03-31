import { serveFile, serveDir } from "jsr:@std/http/file-server";

function handler() {

    return serveDir(request, {
		fsRoot: "/",
		urlRoot: "",
		showDirListing: false
	});
}

Deno.serve(handler);