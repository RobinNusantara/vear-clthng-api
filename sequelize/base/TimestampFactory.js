const { Sequelize, DataTypes } = require("sequelize");

/**
 * @typedef {import("sequelize").DataTypes} DataTypes
 * @typedef {import("sequelize").ColumnOptions} ColumnOptions
 */

/**
 * @typedef  {object}        TColumn
 * @property {string}        field
 * @property {DataTypes}     type
 * @property {ColumnOptions} defaultValue
 * @property {boolean}       allowNull
 */

/**
 * @typedef  {object}  TTimestamp
 * @property {TColumn} createdAt
 * @property {TColumn} updatedAt
 * @property {TColumn} deletedAt
 */


/**
 * @returns {TTimestamp}
 */
const Timestamp = {
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
    },
    deletedAt: {
        field: "deleted_at",
        type: DataTypes.DATE,
        allowNull: true,
    },
};

module.exports = { Timestamp };
