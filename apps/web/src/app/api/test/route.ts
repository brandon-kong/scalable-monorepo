import { db } from "@core/db";

export async function GET(req: Request) {
    const users = await db.selectFrom("User").selectAll().execute();
    return new Response(JSON.stringify(users))
}
