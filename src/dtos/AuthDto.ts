import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from "class-validator";
import { ApiModel, ApiModelProperty } from "swagger-express-ts";

interface IAuthDto {
    email: string;
    username: string;
    password: string;
}

@ApiModel({ name: "SignUpDto" })
export class SignUpDto implements IAuthDto {
    @ApiModelProperty({
        required: true,
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiModelProperty({
        required: true,
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiModelProperty({
        required: true,
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}

@ApiModel({ name: "SignInDto" })
export class SignInDto implements Omit<IAuthDto, "username"> {
    @ApiModelProperty({
        required: true,
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiModelProperty({
        required: true,
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class RefreshTokenDto {
    refreshToken: string;
}
