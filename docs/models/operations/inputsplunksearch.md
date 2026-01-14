# InputSplunkSearch


## Supported Types

### `operations.InputSplunkSearchSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSplunkSearchSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk_search",
  disabled: true,
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
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  endpointParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  endpointHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  logLevel: "error",
  requestTimeout: 9658.73,
  useRoundRobinDns: false,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 4432.64,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 6751.31,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "static",
    interval: 3153.33,
    limit: 2659.11,
    multiplier: 376.03,
    codes: [
      5006.8,
      7560.55,
      2139.95,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 7430.87,
  authType: "oauth",
  description:
    "corner tremendously circa incomparable while for progress useless courteous wetly",
  username: "Clemens.Langworth37",
  password: "2LrvQH9LjXJto67",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://eminent-instance.com",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 2766.19,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `operations.InputSplunkSearchSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputSplunkSearchSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "splunk_search",
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
    searchHead: "<value>",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    cronSchedule: "<value>",
    endpoint: "<value>",
    outputMode: "csv",
    endpointParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    endpointHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    logLevel: "warn",
    requestTimeout: 2503.03,
    useRoundRobinDns: false,
    rejectUnauthorized: false,
    encoding: "<value>",
    keepAliveTime: 9958.22,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 1963.69,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "static",
      interval: 3153.33,
      limit: 2659.11,
      multiplier: 376.03,
      codes: [
        5006.8,
        7560.55,
        2139.95,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 2669.87,
    authType: "none",
    description: "noisily colorful wicked grandpa offset educated",
    username: "Jan.Haley",
    password: "hYfWDtXL1zXHUZr",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://finished-dwell.name",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 7478.72,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  };
```

### `operations.InputSplunkSearchPqEnabledFalseConstraint`

```typescript
const value: operations.InputSplunkSearchPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "splunk_search",
  disabled: true,
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
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  endpointParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  endpointHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  logLevel: "debug",
  requestTimeout: 9246.24,
  useRoundRobinDns: true,
  rejectUnauthorized: false,
  encoding: "<value>",
  keepAliveTime: 322.09,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5745.63,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "static",
    interval: 3153.33,
    limit: 2659.11,
    multiplier: 376.03,
    codes: [
      5006.8,
      7560.55,
      2139.95,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 5552.09,
  authType: "oauth",
  description: "who gee gee instead pish honestly",
  username: "Sophia_Wintheiser",
  password: "SdLzByINVd7ABcG",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://private-desk.net/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 8439.78,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `operations.InputSplunkSearchPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSplunkSearchPqEnabledTrueWithPqConstraint = {
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
  type: "splunk_search",
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
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
  endpointParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  endpointHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  logLevel: "error",
  requestTimeout: 9190.44,
  useRoundRobinDns: false,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 8884.65,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 9014.46,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "static",
    interval: 3153.33,
    limit: 2659.11,
    multiplier: 376.03,
    codes: [
      5006.8,
      7560.55,
      2139.95,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 2183.36,
  authType: "token",
  description: "countess ack unimpressively",
  username: "Yasmin_Carroll",
  password: "6xjtloKf8Sch2p8",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://bouncy-tributary.name",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 8641.45,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

