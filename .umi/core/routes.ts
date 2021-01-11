// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/bob/develop/kaikeba08/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/bob/develop/kaikeba08/umi-app/pages/index').default,
    "exact": true
  },
  {
    "path": "/users",
    "component": require('/Users/bob/develop/kaikeba08/umi-app/pages/users/_layout').default,
    "routes": [
      {
        "path": "/users/",
        "component": require('/Users/bob/develop/kaikeba08/umi-app/pages/users/index').default,
        "exact": true
      },
      {
        "path": "/users/:id",
        "component": require('/Users/bob/develop/kaikeba08/umi-app/pages/users/[id]').default,
        "exact": true
      }
    ]
  },
  {
    "component": require('/Users/bob/develop/kaikeba08/umi-app/pages/notfound').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
