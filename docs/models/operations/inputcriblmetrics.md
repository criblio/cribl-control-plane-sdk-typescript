# InputCriblmetrics


## Supported Types

### `operations.InputCriblmetricsSendToRoutesTrueConstraint`

```typescript
const value: operations.InputCriblmetricsSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "criblmetrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  prefix: "<value>",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "oh restaurant but",
};
```

### `operations.InputCriblmetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputCriblmetricsSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "criblmetrics",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
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
    prefix: "<value>",
    fullFidelity: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "intently pilot gee scarcely midst",
  };
```

### `operations.InputCriblmetricsPqEnabledFalseConstraint`

```typescript
const value: operations.InputCriblmetricsPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "criblmetrics",
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
  prefix: "<value>",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "fireplace archive soulful hunger since whale swine",
};
```

### `operations.InputCriblmetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputCriblmetricsPqEnabledTrueWithPqConstraint = {
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
  type: "criblmetrics",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
  prefix: "<value>",
  fullFidelity: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "at likewise geez",
};
```

