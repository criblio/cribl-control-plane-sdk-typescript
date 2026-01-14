# InputWindowsMetrics


## Supported Types

### `operations.InputWindowsMetricsSendToRoutesTrueConstraint`

```typescript
const value: operations.InputWindowsMetricsSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "windows_metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  interval: 2679.55,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "disabled",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "disabled",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "disabled",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: false,
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "lamp quizzically menacing",
};
```

### `operations.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "windows_metrics",
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
    interval: 1657.3,
    host: {
      mode: "custom",
      custom: {
        system: {
          mode: "disabled",
          detail: false,
        },
        cpu: {
          mode: "disabled",
          perCpu: false,
          detail: false,
          time: false,
        },
        memory: {
          mode: "disabled",
          detail: false,
        },
        network: {
          mode: "disabled",
          detail: true,
          protocols: true,
          devices: [
            "<value 1>",
            "<value 2>",
          ],
          perInterface: true,
        },
        disk: {
          mode: "disabled",
          perVolume: false,
          detail: false,
          volumes: [
            "<value 1>",
          ],
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
          includeChildren: false,
        },
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: false,
    description:
      "laughter yippee minor lighthearted pricey notwithstanding given gosh tromp",
  };
```

### `operations.InputWindowsMetricsPqEnabledFalseConstraint`

```typescript
const value: operations.InputWindowsMetricsPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "windows_metrics",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
  interval: 845.39,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "disabled",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "disabled",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "disabled",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: false,
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description: "doorpost ugh cow opposite shyly brr unlawful unless",
};
```

### `operations.InputWindowsMetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputWindowsMetricsPqEnabledTrueWithPqConstraint = {
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
  type: "windows_metrics",
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
  interval: 4223.62,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "disabled",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "disabled",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "disabled",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: false,
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "selfishly trial culture amid by self-assured qua er towards",
};
```

