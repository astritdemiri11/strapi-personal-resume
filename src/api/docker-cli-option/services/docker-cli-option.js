'use strict';

/**
 * docker-cli-option service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docker-cli-option.docker-cli-option');
