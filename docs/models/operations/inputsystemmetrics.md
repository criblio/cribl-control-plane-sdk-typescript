# InputSystemMetrics


## Supported Types

### `operations.InputSystemMetricsSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSystemMetricsSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "system_metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  interval: 691.85,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "all",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: true,
        detail: false,
        time: false,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: true,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        mountpoints: [
          "<value 1>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
        perDevice: true,
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
  container: {
    mode: "custom",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    dockerTimeout: 4624.48,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: true,
    perDevice: false,
    detail: false,
  },
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
    destPath: "<value>",
  },
  description: "progress analogy regulate bliss",
};
```

### `operations.InputSystemMetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputSystemMetricsSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "system_metrics",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
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
    interval: 6272.6,
    host: {
      mode: "disabled",
      custom: {
        system: {
          mode: "all",
          processes: true,
        },
        cpu: {
          mode: "custom",
          perCpu: true,
          detail: false,
          time: false,
        },
        memory: {
          mode: "all",
          detail: false,
        },
        network: {
          mode: "disabled",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: true,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          mountpoints: [
            "<value 1>",
          ],
          fstypes: [
            "<value 1>",
            "<value 2>",
          ],
          perDevice: true,
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
    container: {
      mode: "custom",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
      ],
      dockerTimeout: 4624.48,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: true,
      perDevice: false,
      detail: false,
    },
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
      destPath: "<value>",
    },
    description: "cleaner quart since gosh unto restfully",
  };
```

### `operations.InputSystemMetricsPqEnabledFalseConstraint`

```typescript
const value: operations.InputSystemMetricsPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "system_metrics",
  disabled: false,
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
  interval: 2981.49,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "all",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: true,
        detail: false,
        time: false,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: true,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        mountpoints: [
          "<value 1>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
        perDevice: true,
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
  container: {
    mode: "custom",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    dockerTimeout: 4624.48,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: true,
    perDevice: false,
    detail: false,
  },
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
    destPath: "<value>",
  },
  description: "begonia down drug knowledgeably",
};
```

### `operations.InputSystemMetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSystemMetricsPqEnabledTrueWithPqConstraint = {
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
  type: "system_metrics",
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
  interval: 1219.22,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "all",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: true,
        detail: false,
        time: false,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "disabled",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: true,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        mountpoints: [
          "<value 1>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
        perDevice: true,
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
  container: {
    mode: "custom",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    dockerTimeout: 4624.48,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: true,
    perDevice: false,
    detail: false,
  },
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
    destPath: "<value>",
  },
  description: "topsail usually finally mmm",
};
```

