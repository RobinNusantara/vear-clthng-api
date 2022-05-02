'use strict';
require("dotenv").config();

/**
 * @typedef {import("sequelize").QueryInterface} QueryInterface
 * @typedef {import("sequelize").Sequelize} Sequelize
 */

/**
 * @param {number} id
 * @param {string} name
 * @param {string} color
 */
function createColor(id, name, color) {
    return {
        id,
        name,
        hex_color: color,
        created_at: new Date(),
        updated_at: new Date(),
    };
}

module.exports = {
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async up (queryInterface, Sequelize) {
        return await queryInterface.bulkInsert("colors", [
            createColor(1, "Black", "#000000"),
            createColor(2, "White", "#FFFFFF"),
            createColor(3, "Red", "#FF0000"),
            createColor(4, "Green", "#008000"),
            createColor(5, "Blue", "#0000FF"),
        ]);
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {}
};
