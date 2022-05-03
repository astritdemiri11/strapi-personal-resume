'use strict';

/**
 * docker-cli-option router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::docker-cli-option.docker-cli-option');
