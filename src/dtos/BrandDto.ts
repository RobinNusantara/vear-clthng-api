import { BrandModel } from "@apps/models/BrandModel";

export class BrandDto {
    id: number;

    name: string;

    public static fromBrandModel(brand: BrandModel): BrandDto {
        return {
            id: brand.id,
            name: brand.brandName,
        };
    }
}
