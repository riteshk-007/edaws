import prisma from "@/utils/Db.config";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    if ([email, password].some((field) => field?.trim() === "")) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }
    if (password.length < 6) {
      return NextResponse.json({
        message: "Password should be minimum 6 characters",
        status: 400,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const emailCheck = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    if (emailCheck) {
      return NextResponse.json({
        message: "Email already exists",
        status: 400,
      });
    }
    const user = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({
      message: "User created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Somthing went wrong",
      status: 500,
      error: error.message,
    });
  }
};
