# InputExec


## Supported Types

### `operations.InputExecSendToRoutesTrueConstraint`

```typescript
const value: operations.InputExecSendToRoutesTrueConstraint = {
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

### `operations.InputExecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputExecSendToRoutesFalseWithConnectionsConstraint = {
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

### `operations.InputExecPqEnabledFalseConstraint`

```typescript
const value: operations.InputExecPqEnabledFalseConstraint = {
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

### `operations.InputExecPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputExecPqEnabledTrueWithPqConstraint = {
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

