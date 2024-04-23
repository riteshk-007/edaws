import prisma from "@/utils/Db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, phone, pan, amount } = await req.json();
  if (!name || !email || !phone || !pan || !amount) {
    return NextResponse.error({
      status: 400,
      message: "Please fill all the fields",
    });
  }
  try {
    const data = await prisma.User.create({
      data: {
        name,
        email,
        phone,
        pan,
        amount,
      },
    });
    return NextResponse.json({
      data,
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: "Something went wrong",
    });
  }
};

export const GET = async () => {
  try {
    const data = await prisma.User.findMany();
    return NextResponse.json({
      data,
      message: "Users fetched successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: "Something went wrong",
    });
  }
};
