import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as S3Migration from '../lib/s3-migration-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new S3Migration.S3MigrationStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
