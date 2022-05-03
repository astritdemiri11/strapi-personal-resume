'use strict';

/**
 * docker-cli-parameter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docker-cli-parameter.docker-cli-parameter');
