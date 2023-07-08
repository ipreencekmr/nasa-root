import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => [
  <ModuleRoute key="nasa-root" path="/">
    <ModuleRoute exact={true} path="(:locale)/" />
    <ModuleRoute moduleName="nasa-container">
      <ModuleRoute>
        <ModuleRoute
          path="(:locale)/home"
          moduleName="nasa-home"
        />
        <ModuleRoute
          path="(:locale)/auth/:authType"
          moduleName="nasa-auth"
        />
        <ModuleRoute
          path="(:locale)/detail/:id"
          moduleName="nasa-detail"
        />
        <ModuleRoute
          path="(:locale)/about"
          moduleName="nasa-about"
        />
      </ModuleRoute>
    </ModuleRoute>
  </ModuleRoute>,
];

export default childRoutes;
