'use strict';

/**
 * photo-editing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo-editing.photo-editing');
