import {
    IsString,
    IsNotEmpty,
    IsEmail,
    MaxLength,
    MinLength,
} from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @IsNotEmpty()
    password: string;
}

export class SignInDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
