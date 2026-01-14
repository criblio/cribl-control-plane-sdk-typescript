# InputSystemMetrics


## Supported Types

### `models.InputSystemMetricsSendToRoutesTrueConstraint`

```typescript
const value: models.InputSystemMetricsSendToRoutesTrueConstraint = {
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
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: false,
        devices: [
          "<value 1>",
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
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 9942.78,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: true,
    detail: false,
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
  description: "progress analogy regulate bliss",
};
```

### `models.InputSystemMetricsSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputSystemMetricsSendToRoutesFalseWithConnectionsConstraint = {
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
          mode: "custom",
          processes: true,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: true,
          time: false,
        },
        memory: {
          mode: "custom",
          detail: true,
        },
        network: {
          mode: "all",
          detail: true,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: true,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: false,
          devices: [
            "<value 1>",
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
      mode: "basic",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dockerTimeout: 9942.78,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: false,
      perDevice: true,
      detail: false,
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
    description: "cleaner quart since gosh unto restfully",
  };
```

### `models.InputSystemMetricsPqEnabledFalseConstraint`

```typescript
const value: models.InputSystemMetricsPqEnabledFalseConstraint = {
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
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: false,
        devices: [
          "<value 1>",
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
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 9942.78,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: true,
    detail: false,
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
  description: "begonia down drug knowledgeably",
};
```

### `models.InputSystemMetricsPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputSystemMetricsPqEnabledTrueWithPqConstraint = {
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
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: false,
        devices: [
          "<value 1>",
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
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 9942.78,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: true,
    detail: false,
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
  description:
    "forenenst concrete supposing quiet but concerning consequently aside hovel",
};
```

