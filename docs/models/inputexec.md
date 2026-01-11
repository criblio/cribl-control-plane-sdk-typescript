# InputExec


## Supported Types

### `models.InputExecSendToRoutesTrueConstraint`

```typescript
const value: models.InputExecSendToRoutesTrueConstraint = {
  id: "<id>",
  type: "exec",
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
  pq: {
    pqControls: {},
  },
  command: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "but drat what",
};
```

### `models.InputExecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputExecSendToRoutesFalseWithConnectionsConstraint = {
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "exec",
  pipeline: "<value>",
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  pq: {
    pqControls: {},
  },
  command: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "corny department knuckle whoever testing urgently",
};
```

### `models.InputExecPqEnabledFalseConstraint`

```typescript
const value: models.InputExecPqEnabledFalseConstraint = {
  id: "<id>",
  type: "exec",
  pipeline: "<value>",
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
    pqControls: {},
  },
  command: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "plus term keenly",
};
```

### `models.InputExecPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputExecPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "exec",
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
  command: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "microchip meanwhile captain phooey hole yet while",
};
```

