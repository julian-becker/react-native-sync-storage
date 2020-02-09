/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  // Exported methods.
  +setItem: (key: string, value: string) => Object;
  +getItem: (item: string) => Object;
  +deleteItem: (key: string) => boolean;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SyncStorage'): Spec);
