# InputSystemState


## Supported Types

### `models.InputSystemStateSendToRoutesTrueConstraint`

```typescript
const value: models.InputSystemStateSendToRoutesTrueConstraint = {
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
      enable: true,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: true,
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
      enable: true,
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
      enable: false,
    },
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "sandbar dutiful easily apud yuck illiterate but absent pro yet",
};
```

### `models.InputSystemStateSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputSystemStateSendToRoutesFalseWithConnectionsConstraint =
  {
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
        enable: true,
      },
      interfaces: {
        enable: false,
      },
      disk: {
        enable: true,
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
        enable: true,
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
        enable: false,
      },
    },
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    disableNativeModule: false,
    description: "dicker while near license galoshes duh",
  };
```

### `models.InputSystemStatePqEnabledFalseConstraint`

```typescript
const value: models.InputSystemStatePqEnabledFalseConstraint = {
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
      enable: true,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: true,
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
      enable: true,
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
      enable: false,
    },
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "winged if profuse pulp aha ah happy-go-lucky triumphantly",
};
```

### `models.InputSystemStatePqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputSystemStatePqEnabledTrueWithPqConstraint = {
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
      enable: true,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: true,
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
      enable: true,
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
      enable: false,
    },
  },
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
    "profitable airline devoted meh where around ideal exasperation fussy",
};
```

