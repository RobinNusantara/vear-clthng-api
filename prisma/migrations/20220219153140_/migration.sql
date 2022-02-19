-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_description" TEXT,
    "product_price" INTEGER NOT NULL,
    "product_stock" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pictures" (
    "id" SERIAL NOT NULL,
    "id_product_fk" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "category_label" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_on_products" (
    "id_product_fk" INTEGER NOT NULL,
    "id_category_fk" INTEGER NOT NULL,

    CONSTRAINT "categories_on_products_pkey" PRIMARY KEY ("id_product_fk","id_category_fk")
);

-- CreateTable
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "color_name" TEXT NOT NULL,
    "color_value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colors_on_products" (
    "id_product_fk" INTEGER NOT NULL,
    "id_color_fk" INTEGER NOT NULL,

    CONSTRAINT "colors_on_products_pkey" PRIMARY KEY ("id_product_fk","id_color_fk")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" SERIAL NOT NULL,
    "size_value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes_on_products" (
    "id_product_fk" INTEGER NOT NULL,
    "id_size_fk" INTEGER NOT NULL,

    CONSTRAINT "sizes_on_products_pkey" PRIMARY KEY ("id_product_fk","id_size_fk")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_product_name_key" ON "products"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_category_name_key" ON "categories"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_category_label_key" ON "categories"("category_label");

-- CreateIndex
CREATE UNIQUE INDEX "colors_color_name_key" ON "colors"("color_name");

-- CreateIndex
CREATE UNIQUE INDEX "colors_color_value_key" ON "colors"("color_value");

-- CreateIndex
CREATE UNIQUE INDEX "sizes_size_value_key" ON "sizes"("size_value");

-- AddForeignKey
ALTER TABLE "pictures" ADD CONSTRAINT "pictures_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_products" ADD CONSTRAINT "categories_on_products_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_products" ADD CONSTRAINT "categories_on_products_id_category_fk_fkey" FOREIGN KEY ("id_category_fk") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colors_on_products" ADD CONSTRAINT "colors_on_products_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colors_on_products" ADD CONSTRAINT "colors_on_products_id_color_fk_fkey" FOREIGN KEY ("id_color_fk") REFERENCES "colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sizes_on_products" ADD CONSTRAINT "sizes_on_products_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sizes_on_products" ADD CONSTRAINT "sizes_on_products_id_size_fk_fkey" FOREIGN KEY ("id_size_fk") REFERENCES "sizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
