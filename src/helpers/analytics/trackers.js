//  @flow

import emptyCuckoo, { type LogEvent, type EventPayload } from './cuckoo';
import TimeTracker from './TimeTracker';
import EnterTracker from './EnterTracker';

const exponeaTracker = (eventName: LogEvent, payload?: EventPayload) => {
  window.cuckoo
    ? window.cuckoo.infinario(eventName, payload || {})
    : emptyCuckoo.infinario(eventName, payload || {});
};
const simpleTracker = (eventName: LogEvent, payload?: EventPayload) => {
  exponeaTracker(eventName, payload);
};

export { TimeTracker, EnterTracker, simpleTracker };
