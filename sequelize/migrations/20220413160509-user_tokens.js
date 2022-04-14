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
        return await queryInterface.createTable("user_tokens", {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            idUserFk: {
                field: "id_user_fk",
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
                onDelete: ReferenceKey.CASCADE,
                onUpdate: ReferenceKey.CASCADE,
            },
            value: {
                type: DataTypes.TEXT,
                allowNull: false,
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
