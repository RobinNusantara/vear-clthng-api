'use strict';
const { genSalt, hash } = require("bcryptjs");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

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
        const email = process.env.ADMIN_EMAIL;
        const username = process.env.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWORD;

        const salted = await genSalt(10);
        const hashed = await hash(password, salted);

        const admin = await queryInterface.rawSelect("users", {
            where: {
                [Op.and]: [
                    {
                        email: {
                            [Op.eq]: email,
                        },
                        username: {
                            [Op.eq]: username,
                        },
                    },
                ],
            },
        }, ["id"]);

        if (!admin) {
            console.log("== Creating new admin account =======")

            await queryInterface.bulkInsert("users", [
                {
                    id: uuidv4(),
                    email,
                    username,
                    password: hashed,
                    role: "Admin",
                },
            ]);

            console.log("== New admin account created =======");
            return true;
        }

        console.log("== Admin account already created! =======");
        return false;
    },

    async down (queryInterface, Sequelize) {}
};
