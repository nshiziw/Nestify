import { NextResponse, NextRequest } from "next/server";

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

export async function POST(req: NextRequest) {
    const body = await req.json();
    const newUser = { id: Date.now(), ...body };

    return NextResponse.json({
        message: "User created successfully",
        user: newUser
    }, {status: 200})
}