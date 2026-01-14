# InputWindowsMetrics


## Supported Types

### `models.InputWindowsMetricsSendToRoutesTrueConstraint`

```typescript
const value: models.InputWindowsMetricsSendToRoutesTrueConstraint = {
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
    mode: "basic",
    custom: {
      system: {
        mode: "all",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "basic",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "lamp quizzically menacing",
};
```

### `models.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputWindowsMetricsSendToRoutesFalseWithConnectionsConstraint = {
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
      mode: "basic",
      custom: {
        system: {
          mode: "all",
          detail: false,
        },
        cpu: {
          mode: "disabled",
          perCpu: false,
          detail: true,
          time: true,
        },
        memory: {
          mode: "custom",
          detail: true,
        },
        network: {
          mode: "basic",
          detail: true,
          protocols: false,
          devices: [
            "<value 1>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          perVolume: false,
          detail: false,
          volumes: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
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
      compress: "none",
      destPath: "<value>",
    },
    disableNativeModule: false,
    description:
      "laughter yippee minor lighthearted pricey notwithstanding given gosh tromp",
  };
```

### `models.InputWindowsMetricsPqEnabledFalseConstraint`

```typescript
const value: models.InputWindowsMetricsPqEnabledFalseConstraint = {
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
    mode: "basic",
    custom: {
      system: {
        mode: "all",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "basic",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description: "doorpost ugh cow opposite shyly brr unlawful unless",
};
```

### `models.InputWindowsMetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputWindowsMetricsPqEnabledTrueWithPqConstraint = {
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
    mode: "basic",
    custom: {
      system: {
        mode: "all",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "basic",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description:
    "outstanding rule bowler pro known barring yuck helplessly quick",
};
```

