# InputOffice365Mgmt


## Supported Types

### `operations.InputOffice365MgmtSendToRoutesTrueConstraint`

```typescript
const value: operations.InputOffice365MgmtSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "office365_mgmt",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 6475.37,
  keepAliveTime: 2725.38,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 8923.96,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  publisherIdentifier: "<value>",
  contentConfig: [
    {
      contentType: "<value>",
      description:
        "ick sign anesthetize wholly yahoo ugh cheese snarling now good-natured",
      interval: 2685.16,
      logLevel: "debug",
      enabled: true,
    },
  ],
  ingestionLag: 8610.3,
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
  description: "cautious awareness along whopping huzzah like",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MgmtSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputOffice365MgmtSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "office365_mgmt",
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
    planType: "dod",
    tenantId: "<id>",
    appId: "<id>",
    timeout: 1289.43,
    keepAliveTime: 7698.77,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 4550.91,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    publisherIdentifier: "<value>",
    contentConfig: [
      {
        contentType: "<value>",
        description:
          "ick sign anesthetize wholly yahoo ugh cheese snarling now good-natured",
        interval: 2685.16,
        logLevel: "debug",
        enabled: true,
      },
    ],
    ingestionLag: 1063.86,
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
    description: "meadow though video shore whoever advancement",
    clientSecret: "<value>",
    textSecret: "<value>",
  };
```

### `operations.InputOffice365MgmtPqEnabledFalseConstraint`

```typescript
const value: operations.InputOffice365MgmtPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "office365_mgmt",
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
  timeout: 1812.34,
  keepAliveTime: 7092.23,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5642.52,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  publisherIdentifier: "<value>",
  contentConfig: [
    {
      contentType: "<value>",
      description:
        "ick sign anesthetize wholly yahoo ugh cheese snarling now good-natured",
      interval: 2685.16,
      logLevel: "debug",
      enabled: true,
    },
  ],
  ingestionLag: 2992.57,
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
  description: "gah failing idolized now wearily intrepid chapel",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MgmtPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputOffice365MgmtPqEnabledTrueWithPqConstraint = {
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
  type: "office365_mgmt",
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
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 143.14,
  keepAliveTime: 623.78,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 9868.17,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  publisherIdentifier: "<value>",
  contentConfig: [
    {
      contentType: "<value>",
      description:
        "ick sign anesthetize wholly yahoo ugh cheese snarling now good-natured",
      interval: 2685.16,
      logLevel: "debug",
      enabled: true,
    },
  ],
  ingestionLag: 2925.12,
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
  description: "of truthfully westernize yet",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

