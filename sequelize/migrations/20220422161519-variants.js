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
        return await queryInterface.createTable("variants", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            idProductFk: {
                field: "id_product_fk",
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "products",
                    key: "id",
                },
                onUpdate: ReferenceKey.CASCADE,
                onDelete: ReferenceKey.RESTRICT,
            },
            ...Timestamp,
        });
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {},
};
