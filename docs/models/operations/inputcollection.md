# InputCollection


## Supported Types

### `operations.InputCollectionSendToRoutesTrueConstraint`

```typescript
const value: operations.InputCollectionSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "collection",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 3631.18,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  throttleRatePerSec: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

### `operations.InputCollectionSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputCollectionSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "collection",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 8730.79,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
      ],
    },
    throttleRatePerSec: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    output: "<value>",
  };
```

### `operations.InputCollectionPqEnabledFalseConstraint`

```typescript
const value: operations.InputCollectionPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "collection",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 9077.19,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  throttleRatePerSec: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

### `operations.InputCollectionPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputCollectionPqEnabledTrueWithPqConstraint = {
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
  type: "collection",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 8076.36,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  throttleRatePerSec: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

