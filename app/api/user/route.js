import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user } = await req.json();

  //If user exixt
  const userResult = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));

  if (userResult?.length == 0) {
    const result = await db
      .insert(USER_TABLE)
      .values({
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
      })
      .returning(USER_TABLE);
    return NextResponse.json(result);
  }
  return NextResponse.json({ userResult });
}
