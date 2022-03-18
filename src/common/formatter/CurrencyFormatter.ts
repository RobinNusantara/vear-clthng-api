export class CurrencyFormatter {
    public static formatToRupiah(price: number): string {
        const results = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);

        return results;
    }
}
