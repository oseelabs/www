import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { Response } from "express";


@Controller("auth")
export class AuthController {
    @Get()
    getHello(@Res({ passthrough: true }) res: Response) {
        return res.status(HttpStatus.OK).json({ message: "Hello from auth module" });
    }

    @Get("clerk/webhook")
    getWebhook(@Res({ passthrough: true }) res: Response) {
        return res.status(HttpStatus.OK).json({ message: "Hello from auth module" });
    }
}