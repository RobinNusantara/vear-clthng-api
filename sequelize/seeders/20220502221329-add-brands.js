'use strict';
require("dotenv").config();

/**
 * @typedef {import("sequelize").QueryInterface} QueryInterface
 * @typedef {import("sequelize").Sequelize} Sequelize
 */

/**
 * @param {number} id
 * @param {string} name 
 */
function createbrand(id, name) {
    return {
        id,
        name: name,
        label: name.toLowerCase(),
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
        return await queryInterface.bulkInsert("brands", [
            createbrand(1, "Adidas"),
            createbrand(2, "Converse"),
            createbrand(3, "Nike"),
            createbrand(4, "Vans"),
        ]);
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {}
};
