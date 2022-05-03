'use strict';

/**
 * docker-cli-parameter router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::docker-cli-parameter.docker-cli-parameter');
