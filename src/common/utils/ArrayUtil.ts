import { Conflict } from "http-errors";

export class ArrayUtil {
    /**
     * **Validate is array of object has duplicate value**
     *
     * @param {number}     args.arrayLength  Array length from original array
     * @param {Array<any>} args.mappedData   Mapped data from original array
     * @param {string}     args.errorMessage Error message to be shown
     *
     * @example
     * ```
     *  const variants = [
     *      { variantId: 1 }, //Duplicate value
     *      { variantId: 2 },
     *      { variantId: 1 }, //Duplicate value
     *  ];
     *
     *  const variantIds = variants.map((variant) => variant.variantId);
     *
     *  const results = ArrayUtil.isArrayOfObjectHasDuplicateValue({
     *      arrayLength: variants.length,
     *      mappedData: variantIds,
     *      errorMessage: "Product can't have same variant!",
     *  });
     * ```
     */
    public static isArrayOfObjectHasDuplicateValue(args: {
        arrayLength: number;
        mappedData: Array<any>;
        errorMessage: string;
    }): boolean {
        const { arrayLength, mappedData, errorMessage } = args;

        const set = new Set(mappedData);

        const isDuplicate = set.size < arrayLength;

        if (isDuplicate) {
            throw new Conflict(errorMessage);
        }

        return false;
    }
}
