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
function createBrand(id, name) {
    return {
        id,
        name,
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
            createBrand(1, "Adidas"),
            createBrand(2, "Converse"),
            createBrand(3, "Nike"),
            createBrand(4, "Vans"),
        ]);
    },
    /**
     * @param {QueryInterface} queryInterface 
     * @param {Sequelize} Sequelize 
     */
    async down (queryInterface, Sequelize) {}
};
