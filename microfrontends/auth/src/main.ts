import { NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    const extraProviders = getSingleSpaExtraProviders();
    const mergedConfig = {
      ...appConfig,
      providers: [...(appConfig.providers || []), ...extraProviders],
    };
    return bootstrapApplication(AppComponent, mergedConfig);
  },
  template: '<app-auth-root />',
  Router,
  NgZone,
  NavigationStart
});

// Type assertion to handle single-spa-angular types
const { bootstrap: bootstrapFn, mount: mountFn, unmount: unmountFn } = lifecycles as any;

// Export lifecycle functions
export const bootstrap = bootstrapFn;
export const mount = mountFn;
export const unmount = unmountFn;

