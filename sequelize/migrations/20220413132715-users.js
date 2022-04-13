'use strict';
const { DataTypes } = require("sequelize");

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
        await queryInterface.createTable("users", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM,
                values: ["Admin", "User"],
                defaultValue: "User",
                allowNull: false,
            },
            status: {
                type: DataTypes.TINYINT(1),
                defaultValue: 1,
                allowNull: false,
            },
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            deletedAt: {
                field: "deleted_at",
                type: DataTypes.DATE,
                allowNull: true,
            },
        });
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {
    }
};
