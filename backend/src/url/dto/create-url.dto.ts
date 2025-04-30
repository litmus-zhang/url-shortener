import { IsString, IsUrl } from "class-validator";

export class CreateUrlDto {
    @IsUrl()
    url: string;
}
export class shortUrlDto {
    @IsString()
    url: string;
}
