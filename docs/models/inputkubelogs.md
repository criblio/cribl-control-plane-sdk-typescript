# InputKubeLogs


## Supported Types

### `models.InputKubeLogsSendToRoutesTrueConstraint`

```typescript
const value: models.InputKubeLogsSendToRoutesTrueConstraint = {
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
      description: "blah that regarding brochure sideboard pleased prudent",
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

### `models.InputKubeLogsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputKubeLogsSendToRoutesFalseWithConnectionsConstraint = {
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
      description: "blah that regarding brochure sideboard pleased prudent",
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

### `models.InputKubeLogsPqEnabledFalseConstraint`

```typescript
const value: models.InputKubeLogsPqEnabledFalseConstraint = {
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
      description: "blah that regarding brochure sideboard pleased prudent",
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

### `models.InputKubeLogsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputKubeLogsPqEnabledTrueWithPqConstraint = {
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
      description: "blah that regarding brochure sideboard pleased prudent",
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
    "<value 2>",
  ],
  staleChannelFlushMs: 872.09,
  enableLoadBalancing: false,
  description: "aha athwart ouch hypothesize list nor",
};
```

