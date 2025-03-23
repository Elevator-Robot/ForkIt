import { defineFunction } from '@aws-amplify/backend';
import { Function, Runtime, Code, LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { Duration } from 'aws-cdk-lib';
import * as path from 'path';

export const brain = defineFunction((scope) => {
  // Create a Lambda layer for Python dependencies.
  const brainDepsLayer = new LayerVersion(scope, 'BrainDepsLayer', {
    compatibleRuntimes: [Runtime.PYTHON_3_13],
    code: Code.fromAsset(path.join(__dirname, 'layer')), // Adjust path as needed.
  });

  return new Function(scope, 'BrainFunction', {
    runtime: Runtime.PYTHON_3_13,
    handler: 'handler.main',
    code: Code.fromAsset('amplify/backend/function/brain/src', {
      bundling: {
        local: {
          tryBundle: (outputDir: string) => {
            // If your dependencies are now in the layer, you might not need additional bundling.
            return true;
          },
        },
        image: Runtime.PYTHON_3_13.bundlingImage,
      },
    }),
    timeout: Duration.seconds(30),
    layers: [brainDepsLayer],
  });
});
