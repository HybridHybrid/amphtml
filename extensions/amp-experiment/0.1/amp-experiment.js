/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {dev} from '../../../src/log';
import {isExperimentOn} from '../../../src/experiments';
import {toggle} from '../../../src/style';

/** @const */
const EXPERIMENT = 'amp-experiment';

export class AmpExperiment extends AMP.BaseElement {

  /** @override */
  isLayoutSupported(unusedLayout) {
    return true;
  }

  /** @override */
  buildCallback() {
    this.isExperimentOn_ = isExperimentOn(this.getWin(), EXPERIMENT);
    if (!this.isExperimentOn_) {
      dev.warn(EXPERIMENT, `Experiment ${EXPERIMENT} disabled`);
      toggle(this.element, false);
      return;
    }
    dev.info(EXPERIMENT, 'amp-experiment is on');
  }
}

AMP.registerElement('amp-experiment', AmpExperiment);
