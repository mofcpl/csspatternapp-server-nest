import { IsEmail, IsString, IsUrl } from "class-validator";

export class registerAuthorDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsUrl()
    homepage: string;
    @IsString()
    password: string;
}