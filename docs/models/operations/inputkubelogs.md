# InputKubeLogs


## Supported Types

### `operations.InputKubeLogsSendToRoutesTrueConstraint`

```typescript
const value: operations.InputKubeLogsSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "kube_logs",
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
  interval: 5606.69,
  rules: [
    {
      filter: "<value>",
      description: "brr until whose coarse how gosh settler premeditation",
    },
  ],
  timestamps: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 6883.3,
  enableLoadBalancing: true,
  description: "softly convalesce hence good-natured",
};
```

### `operations.InputKubeLogsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputKubeLogsSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "kube_logs",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
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
    interval: 9439.41,
    rules: [
      {
        filter: "<value>",
        description: "brr until whose coarse how gosh settler premeditation",
      },
    ],
    timestamps: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 1729.52,
    enableLoadBalancing: true,
    description:
      "hippodrome primary unlike riser terrible solemnly pointless brisk key save",
  };
```

### `operations.InputKubeLogsPqEnabledFalseConstraint`

```typescript
const value: operations.InputKubeLogsPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "kube_logs",
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
  interval: 6590.8,
  rules: [
    {
      filter: "<value>",
      description: "brr until whose coarse how gosh settler premeditation",
    },
  ],
  timestamps: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 4733.28,
  enableLoadBalancing: true,
  description: "webbed bell unto pro gosh",
};
```

### `operations.InputKubeLogsPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputKubeLogsPqEnabledTrueWithPqConstraint = {
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
  type: "kube_logs",
  disabled: true,
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
  interval: 4918.53,
  rules: [
    {
      filter: "<value>",
      description: "brr until whose coarse how gosh settler premeditation",
    },
  ],
  timestamps: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 3961.23,
  enableLoadBalancing: false,
  description:
    "questioningly probe charter whether whenever unsteady around pro",
};
```

