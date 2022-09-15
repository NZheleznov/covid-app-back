import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('auth')
  async auth(
    @Query('code') code: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const res = await this.authService.getAccessToken(code);
    const token = res.data.access_token;
    response.cookie('access_token', token);
    response.redirect('http://localhost:4200/dashboard/cases');
  }
}
