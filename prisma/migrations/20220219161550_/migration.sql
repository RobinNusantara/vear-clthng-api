-- CreateTable
CREATE TABLE "materials" (
    "id" SERIAL NOT NULL,
    "material_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials_on_products" (
    "id_product_fk" INTEGER NOT NULL,
    "id_material_fk" INTEGER NOT NULL,

    CONSTRAINT "materials_on_products_pkey" PRIMARY KEY ("id_product_fk","id_material_fk")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands_on_products" (
    "id_product_fk" INTEGER NOT NULL,
    "id_brand_fk" INTEGER NOT NULL,

    CONSTRAINT "brands_on_products_pkey" PRIMARY KEY ("id_product_fk","id_brand_fk")
);

-- CreateIndex
CREATE UNIQUE INDEX "materials_material_name_key" ON "materials"("material_name");

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_name_key" ON "brands"("brand_name");

-- AddForeignKey
ALTER TABLE "materials_on_products" ADD CONSTRAINT "materials_on_products_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materials_on_products" ADD CONSTRAINT "materials_on_products_id_material_fk_fkey" FOREIGN KEY ("id_material_fk") REFERENCES "materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands_on_products" ADD CONSTRAINT "brands_on_products_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands_on_products" ADD CONSTRAINT "brands_on_products_id_brand_fk_fkey" FOREIGN KEY ("id_brand_fk") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
