#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Tags } from 'aws-cdk-lib';
import Cdk1Stack from '../lib/cdk1-stack';

const app = new cdk.App();
const stack = new Cdk1Stack(app, 'Cdk1', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: '471112499382', region: 'eu-west-2' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
Tags.of(stack).add('stack', stack.stackName);
