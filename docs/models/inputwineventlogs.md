# InputWinEventLogs


## Supported Types

### `models.InputWinEventLogsSendToRoutesTrueConstraint`

```typescript
const value: models.InputWinEventLogsSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "win_event_logs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  logNames: [
    "<value 1>",
  ],
  readMode: "newest",
  eventFormat: "json",
  disableNativeModule: false,
  interval: 5641.83,
  batchSize: 1505.45,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 5119.23,
  description: "yowza forage gummy descent vary option fit indeed however",
  disableJsonRendering: true,
  disableXmlRendering: false,
};
```

### `models.InputWinEventLogsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputWinEventLogsSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "win_event_logs",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
    streamtags: [
      "<value 1>",
      "<value 2>",
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
    logNames: [
      "<value 1>",
      "<value 2>",
    ],
    readMode: "oldest",
    eventFormat: "xml",
    disableNativeModule: false,
    interval: 119.38,
    batchSize: 2355.19,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxEventBytes: 9685.81,
    description:
      "noxious jaunty sheathe unlike procrastinate upward begonia strictly",
    disableJsonRendering: true,
    disableXmlRendering: true,
  };
```

### `models.InputWinEventLogsPqEnabledFalseConstraint`

```typescript
const value: models.InputWinEventLogsPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "win_event_logs",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  logNames: [
    "<value 1>",
  ],
  readMode: "oldest",
  eventFormat: "json",
  disableNativeModule: true,
  interval: 959.49,
  batchSize: 4628.12,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 2722.95,
  description: "since evenly mmm tighten dissemble",
  disableJsonRendering: true,
  disableXmlRendering: false,
};
```

### `models.InputWinEventLogsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputWinEventLogsPqEnabledTrueWithPqConstraint = {
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
  type: "win_event_logs",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  logNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  readMode: "oldest",
  eventFormat: "json",
  disableNativeModule: false,
  interval: 8851.84,
  batchSize: 1253.88,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 8254.96,
  description: "modulo unaccountably yahoo now yippee insert",
  disableJsonRendering: false,
  disableXmlRendering: false,
};
```

