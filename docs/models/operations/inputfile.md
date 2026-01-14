# InputFile


## Supported Types

### `operations.InputFileSendToRoutesTrueConstraint`

```typescript
const value: operations.InputFileSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  mode: "auto",
  interval: 3159.74,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: false,
  idleTimeout: 3871.48,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: false,
  hashLen: 3131.4,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 250.3,
  description:
    "questioningly since blah neaten remand boohoo accompanist vice ew know",
  path: "/usr/sbin",
  depth: 4180.11,
  suppressMissingPathErrors: false,
  deleteFiles: true,
  includeUnidentifiableBinary: false,
};
```

### `operations.InputFileSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputFileSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  mode: "manual",
  interval: 282.14,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 3465.64,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: true,
  hashLen: 1166.29,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 313.18,
  description: "hypothesize faithfully materialise ack",
  path: "/private/tmp",
  depth: 2350.04,
  suppressMissingPathErrors: true,
  deleteFiles: false,
  includeUnidentifiableBinary: false,
};
```

### `operations.InputFilePqEnabledFalseConstraint`

```typescript
const value: operations.InputFilePqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  mode: "auto",
  interval: 664.05,
  filenames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  filterArchivedFiles: true,
  tailOnly: true,
  idleTimeout: 1197.21,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: false,
  forceText: true,
  hashLen: 4105.34,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 8213.53,
  description: "aha worse filthy given ravage purse gosh scratch mortally",
  path: "/usr/src",
  depth: 7701.56,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  includeUnidentifiableBinary: false,
};
```

### `operations.InputFilePqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputFilePqEnabledTrueWithPqConstraint = {
  pqEnabled: true,
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  mode: "auto",
  interval: 5133.75,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 293.88,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: false,
  hashLen: 3326.78,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 1723.38,
  description: "dutiful under ick crackle",
  path: "/opt",
  depth: 3623.64,
  suppressMissingPathErrors: true,
  deleteFiles: false,
  includeUnidentifiableBinary: true,
};
```

