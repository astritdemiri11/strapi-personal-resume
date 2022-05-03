'use strict';

/**
 * docker-cli-command router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::docker-cli-command.docker-cli-command');
