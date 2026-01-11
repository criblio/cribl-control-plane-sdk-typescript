# InputWinEventLogs


## Supported Types

### `models.InputWinEventLogsSendToRoutesTrueWithConnectionsConstraint`

```typescript
const value: models.InputWinEventLogsSendToRoutesTrueWithConnectionsConstraint =
  {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "win_event_logs",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      pqControls: {},
    },
    logNames: [
      "<value 1>",
      "<value 2>",
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "cautiously chime pip ill-fated quirkily baa boo",
  };
```

### `models.InputWinEventLogsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputWinEventLogsSendToRoutesFalseWithConnectionsConstraint = {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "win_event_logs",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      pqControls: {},
    },
    logNames: [],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "far understated meanwhile",
  };
```

### `models.InputWinEventLogsPqEnabledFalseWithPqConstraint`

```typescript
const value: models.InputWinEventLogsPqEnabledFalseWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "win_event_logs",
  pipeline: "<value>",
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
  logNames: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "outgoing pish ick whereas monocle to publication outrank for motionless",
};
```

### `models.InputWinEventLogsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputWinEventLogsPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "win_event_logs",
  pipeline: "<value>",
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
  logNames: [
    "<value 1>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "castanet pivot fast",
};
```

