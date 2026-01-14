# InputKubeEvents


## Supported Types

### `models.InputKubeEventsSendToRoutesTrueConstraint`

```typescript
const value: models.InputKubeEventsSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "kube_events",
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
  rules: [
    {
      filter: "<value>",
      description: "gerbil who despite each ha deliquesce",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "neglected vice blah",
};
```

### `models.InputKubeEventsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputKubeEventsSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "kube_events",
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
    rules: [
      {
        filter: "<value>",
        description: "gerbil who despite each ha deliquesce",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description:
      "merrily that lieu precedent fen because midst unto proper nearly",
  };
```

### `models.InputKubeEventsPqEnabledFalseConstraint`

```typescript
const value: models.InputKubeEventsPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "kube_events",
  disabled: false,
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
  rules: [
    {
      filter: "<value>",
      description: "gerbil who despite each ha deliquesce",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "rapidly phew gosh speedily curiously",
};
```

### `models.InputKubeEventsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputKubeEventsPqEnabledTrueWithPqConstraint = {
  pqEnabled: false,
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
  type: "kube_events",
  disabled: false,
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
  rules: [
    {
      filter: "<value>",
      description: "gerbil who despite each ha deliquesce",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "what ambitious gallery cease yuck",
};
```

