# InputOffice365Service


## Supported Types

### `operations.InputOffice365ServiceSendToRoutesTrueConstraint`

```typescript
const value: operations.InputOffice365ServiceSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "office365_service",
  disabled: false,
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 6062.78,
  keepAliveTime: 238.23,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 7336.23,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  contentConfig: [
    {
      contentType: "<value>",
      description: "from cycle decode rebuff gosh",
      interval: 1605.88,
      logLevel: "error",
      enabled: false,
    },
  ],
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "knotty rapidly vice whoa",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365ServiceSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputOffice365ServiceSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "office365_service",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
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
    planType: "gcc_high",
    tenantId: "<id>",
    appId: "<id>",
    timeout: 5266.28,
    keepAliveTime: 522.59,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 4274.73,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    contentConfig: [
      {
        contentType: "<value>",
        description: "from cycle decode rebuff gosh",
        interval: 1605.88,
        logLevel: "error",
        enabled: false,
      },
    ],
    retryRules: {
      type: "none",
      interval: 2764.09,
      limit: 9039.82,
      multiplier: 1648,
      codes: [
        1223.37,
        608.99,
        2918.61,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "secret",
    description:
      "questioningly accountability by provided provided shear upside-down government stylish woot",
    clientSecret: "<value>",
    textSecret: "<value>",
  };
```

### `operations.InputOffice365ServicePqEnabledFalseConstraint`

```typescript
const value: operations.InputOffice365ServicePqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "office365_service",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 1039.8,
  keepAliveTime: 2380.48,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 9805.51,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  contentConfig: [
    {
      contentType: "<value>",
      description: "from cycle decode rebuff gosh",
      interval: 1605.88,
      logLevel: "error",
      enabled: false,
    },
  ],
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "consequently forenenst scrape stigmatize what yet",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365ServicePqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputOffice365ServicePqEnabledTrueWithPqConstraint = {
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
  type: "office365_service",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
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
  planType: "gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 9150.69,
  keepAliveTime: 8525.79,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 6787.93,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  contentConfig: [
    {
      contentType: "<value>",
      description: "from cycle decode rebuff gosh",
      interval: 1605.88,
      logLevel: "error",
      enabled: false,
    },
  ],
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "secret",
  description: "phooey both watery whereas tough because woot",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

