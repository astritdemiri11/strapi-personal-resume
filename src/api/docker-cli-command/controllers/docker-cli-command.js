'use strict';

/**
 *  docker-cli-command controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::docker-cli-command.docker-cli-command');
