/*
 * TypeScript 7 has no JavaScript compiler API, tools needing it (tslint) are redirected to TypeScript 6
 * Usage: node --import ./use-typescript6.js <tool>
 */

import { registerHooks } from 'node:module';

registerHooks({
	resolve(specifier, context, nextResolve) {
		return nextResolve(specifier === 'typescript' ? '@typescript/typescript6' : specifier, context);
	}
});
