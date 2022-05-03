'use strict';

/**
 * docker-cli-command service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docker-cli-command.docker-cli-command');
