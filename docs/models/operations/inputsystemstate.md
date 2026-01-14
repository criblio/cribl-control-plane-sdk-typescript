# InputSystemState


## Supported Types

### `operations.InputSystemStateSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSystemStateSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "system_state",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  interval: 4654.21,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: false,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: false,
    },
    metadata: {
      enable: false,
    },
    routes: {
      enable: true,
    },
    dns: {
      enable: false,
    },
    user: {
      enable: false,
    },
    firewall: {
      enable: false,
    },
    services: {
      enable: false,
    },
    ports: {
      enable: true,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "sandbar dutiful easily apud yuck illiterate but absent pro yet",
};
```

### `operations.InputSystemStateSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputSystemStateSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "system_state",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
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
    interval: 3013.77,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: false,
      },
      interfaces: {
        enable: false,
      },
      disk: {
        enable: false,
      },
      metadata: {
        enable: false,
      },
      routes: {
        enable: true,
      },
      dns: {
        enable: false,
      },
      user: {
        enable: false,
      },
      firewall: {
        enable: false,
      },
      services: {
        enable: false,
      },
      ports: {
        enable: true,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: false,
    description: "dicker while near license galoshes duh",
  };
```

### `operations.InputSystemStatePqEnabledFalseConstraint`

```typescript
const value: operations.InputSystemStatePqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "system_state",
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
  interval: 8933.91,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: false,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: false,
    },
    metadata: {
      enable: false,
    },
    routes: {
      enable: true,
    },
    dns: {
      enable: false,
    },
    user: {
      enable: false,
    },
    firewall: {
      enable: false,
    },
    services: {
      enable: false,
    },
    ports: {
      enable: true,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "winged if profuse pulp aha ah happy-go-lucky triumphantly",
};
```

### `operations.InputSystemStatePqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSystemStatePqEnabledTrueWithPqConstraint = {
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
  type: "system_state",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
  interval: 127.68,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: false,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: false,
    },
    metadata: {
      enable: false,
    },
    routes: {
      enable: true,
    },
    dns: {
      enable: false,
    },
    user: {
      enable: false,
    },
    firewall: {
      enable: false,
    },
    services: {
      enable: false,
    },
    ports: {
      enable: true,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description:
    "term when ultimately extremely showy authentic posh aha dulcimer",
};
```

