import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com"
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com"
        }
    ];

    return NextResponse.json(users, {status: 200});
}