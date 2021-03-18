#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3MigrationStack } from '../lib/s3-migration-stack';

const app = new cdk.App();
new S3MigrationStack(app, 'S3MigrationStack');
