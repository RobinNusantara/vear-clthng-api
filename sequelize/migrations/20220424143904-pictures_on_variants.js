'use strict';
const { DataTypes } = require("sequelize");
const { Timestamp } = require("../base/TimestampFactory");
const { ReferenceKey } = require("../enums/ReferenceKeyEnum");

/**
 * @typedef {import("sequelize").QueryInterface} QueryInterface
 * @typedef {import("sequelize").Sequelize} Sequelize
 */

module.exports = {
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async up (queryInterface, Sequelize) {
        return await queryInterface.createTable("pictures_on_variants", {
            idVariantFk: {
                field: "id_variant_fk",
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "variants",
                    key: "id"
                },
                onUpdate: ReferenceKey.CASCADE,
                onDelete: ReferenceKey.CASCADE,
            },
            idPictureFk: {
                field: "id_picture_fk",
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: "pictures",
                    key: "id",
                },
                onUpdate: ReferenceKey.CASCADE,
                onDelete: ReferenceKey.CASCADE,
            },
            ...Timestamp,
        });
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {}
};
