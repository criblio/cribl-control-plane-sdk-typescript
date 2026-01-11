# InputCollection


## Supported Types

### `models.InputCollectionSendToRoutesTrueConstraint`

```typescript
const value: models.InputCollectionSendToRoutesTrueConstraint = {
  id: "<id>",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

### `models.InputCollectionSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputCollectionSendToRoutesFalseWithConnectionsConstraint =
  {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    pq: {
      pqControls: {},
    },
    breakerRulesets: [
      "<value 1>",
    ],
    preprocess: {
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    output: "<value>",
  };
```

### `models.InputCollectionPqEnabledFalseConstraint`

```typescript
const value: models.InputCollectionPqEnabledFalseConstraint = {
  id: "<id>",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

### `models.InputCollectionPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputCollectionPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

