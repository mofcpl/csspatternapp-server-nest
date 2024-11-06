import { Body, Controller, Post } from '@nestjs/common';

import { registerAuthorDto } from './dtos/register-author.dto';

@Controller('auth')
export class AuthorsController {
    @Post('/signup')
    registerAuthor(@Body() body: registerAuthorDto) {}
}

