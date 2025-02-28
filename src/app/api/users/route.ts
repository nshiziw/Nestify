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
    if (!body.username) {
        return NextResponse.json({
            message: "Username is required"
        }, {status: 400})
    }

    if (!body.email) {
        return NextResponse.json({
            message: "Email is required"
        }, {status: 400})
    }


    try {
        
        const newUser = { id: Date.now(), ...body };
    
        return NextResponse.json({
            message: "User created successfully",
            user: newUser
        }, { status: 200 })
        
    } catch (error) {
        return NextResponse.json({
            message: "Error creating user",
            error: error instanceof Error ? error.message : "User creation failed"
        }, {status: 500})
    }
}


export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        return NextResponse.json({
            message: "User updated successfully",
            updatedUser: body
        }, {status: 200})
    } catch (err) {
        return NextResponse.json({
            message: "Error parsing request body",
            error: err instanceof Error ? err.message : "Invalid request body"
        }, {status: 400})
    }
}