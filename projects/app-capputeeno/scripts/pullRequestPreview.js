import { execSync } from 'child_process';

console.log('=== [DEPLOY_PREVIEW]: START ===');

const command = 'yarn deploy:staging';
const output = execSync(command, { encoding: 'utf-8' });
const outputLines = output.split('\n');
const DEPLOY_URL_PREVIEW = outputLines[outputLines.length - 1];

console.log(`Preview_URL: ${DEPLOY_URL_PREVIEW}`);

console.log('=== [DEPLOY_PREVIEW]: END ===');
