import { auth } from "@core/auth";

export default auth((req, res) => {
    console.log(req.auth?.user);
})

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    runtime: "nodejs",
};
