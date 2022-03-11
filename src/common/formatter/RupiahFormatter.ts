export class RupiahFormatter {
    public static formatCurrency(price: number): string {
        const results = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);

        return results;
    }
}
