# InputWindowsMetrics


## Supported Types

### `operations.InputWindowsMetricsSendToRoutesTrueConstraint`

```typescript
const value: operations.InputWindowsMetricsSendToRoutesTrueConstraint = {
  id: "<id>",
  type: "windows_metrics",
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
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
          "<value 2>",
        ],
      },
      disk: {
        volumes: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description: "ugh pish likewise guzzle stupendous although vice dismal",
};
```

### `operations.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint = {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "windows_metrics",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      pqControls: {},
    },
    host: {
      custom: {
        system: {},
        cpu: {},
        memory: {},
        network: {
          devices: [
            "<value 1>",
            "<value 2>",
          ],
        },
        disk: {
          volumes: [
            "<value 1>",
            "<value 2>",
          ],
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
        },
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {},
    description:
      "fall vengeful scale severe miserable minus secret at reclassify",
  };
```

### `operations.InputWindowsMetricsPqEnabledFalseConstraint`

```typescript
const value: operations.InputWindowsMetricsPqEnabledFalseConstraint = {
  id: "<id>",
  type: "windows_metrics",
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
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
          "<value 2>",
        ],
      },
      disk: {
        volumes: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description: "institute colour prance",
};
```

### `operations.InputWindowsMetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputWindowsMetricsPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "windows_metrics",
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
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
          "<value 2>",
        ],
      },
      disk: {
        volumes: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description: "wee from thoughtfully duh to advancement",
};
```

