'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/protected-portfolio/)) {
    page.matchPath = '/protected-portfolio/*';
    createPage(page);
  }
};
