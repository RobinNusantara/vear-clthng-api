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
        return await queryInterface.createTable("products", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            idBrandFk: {
                field: "id_brand_fk",
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "brands",
                    key: "id",
                },
                onUpdate: ReferenceKey.CASCADE,
                onDelete: ReferenceKey.SET_NULL,
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["Active", "Inactive"],
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
