import { NextRequest, NextResponse } from "next/server";
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
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com"
    }
]
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    try {

        const params = await context.params;

        const userId = parseInt(params.id, 10);
        let body;

        try {
            body = await req.json();
        } catch {
            return NextResponse.json({
                status: 400,
                message: "Invalid or missing JSON body"
            }, {status: 400})
        }

        const newName = body.name;

        if (userId === -1) {
            return NextResponse.json({
                status: 404,
                message: "User not found"
            }, {status: 404})
        }
        
        if (!newName) {
            return NextResponse.json({
                status: 400,
                message: "Name is required"
            }, {status: 400})
        }

        // update name from the users
        users[userId].name = newName;

        return NextResponse.json({
            message: "User updated successfully",
            newData: users[userId]
        }, {status: 200})

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : "Internal Server Error"
        })
    }
}