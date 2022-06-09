/* eslint-disable react/prop-types */
import React from 'react';
import 'nextra-theme-docs/style.css';
import { ExternalDocsContainer } from '@storybook/addon-docs';
import { composeConfigs } from '@storybook/store';
import * as reactAnnotations from '@storybook/react/preview';
import * as previewAnnotations from '../.storybook/preview';

const projectAnnotations = composeConfigs([reactAnnotations, previewAnnotations]);

export default function Nextra({ Component, pageProps }) {
  return (
    <ExternalDocsContainer projectAnnotations={projectAnnotations}>
      <Component {...pageProps} />
    </ExternalDocsContainer>
  );
}