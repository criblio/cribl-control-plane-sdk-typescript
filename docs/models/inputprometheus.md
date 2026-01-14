# InputPrometheus


## Supported Types

### `models.InputPrometheusSendToRoutesTrueConstraint`

```typescript
const value: models.InputPrometheusSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "prometheus",
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "static",
  interval: 7462.29,
  logLevel: "error",
  rejectUnauthorized: false,
  timeout: 8809.89,
  keepAliveTime: 8567.8,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 8672.06,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "before oof accredit",
  targetList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  recordType: "SRV",
  scrapePort: 7502.55,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  scrapeProtocol: "http",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: false,
  searchFilter: [
    {
      Name: "<value>",
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9158.08,
  username: "Arianna77",
  password: "UeVYpA646riWDwe",
  credentialsSecret: "<value>",
};
```

### `models.InputPrometheusSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputPrometheusSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "prometheus",
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
    dimensionList: [
      "<value 1>",
    ],
    discoveryType: "ec2",
    interval: 6023.73,
    logLevel: "debug",
    rejectUnauthorized: false,
    timeout: 245.9,
    keepAliveTime: 9157.11,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 7248.17,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "where anti soon convalesce mortar till",
    targetList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    recordType: "AAAA",
    scrapePort: 3919.73,
    nameList: [
      "<value 1>",
      "<value 2>",
    ],
    scrapeProtocol: "http",
    scrapePath: "<value>",
    awsAuthenticationMethod: "<value>",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: false,
    searchFilter: [
      {
        Name: "<value>",
        Values: [],
      },
    ],
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2626.58,
    username: "Theodore.Schneider57",
    password: "Jb8SKOUzPkmEw7j",
    credentialsSecret: "<value>",
  };
```

### `models.InputPrometheusPqEnabledFalseConstraint`

```typescript
const value: models.InputPrometheusPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "prometheus",
  disabled: true,
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "dns",
  interval: 1344.03,
  logLevel: "info",
  rejectUnauthorized: false,
  timeout: 999.21,
  keepAliveTime: 2.37,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 6984.01,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "fruitful potentially ruddy smog schnitzel via yahoo",
  targetList: [
    "<value 1>",
    "<value 2>",
  ],
  recordType: "AAAA",
  scrapePort: 3358.04,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  scrapeProtocol: "http",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: true,
  searchFilter: [
    {
      Name: "<value>",
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6447.32,
  username: "Jaden.Kihn",
  password: "uhtELPGjoVKnQAR",
  credentialsSecret: "<value>",
};
```

### `models.InputPrometheusPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputPrometheusPqEnabledTrueWithPqConstraint = {
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
  type: "prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "dns",
  interval: 4348.43,
  logLevel: "warn",
  rejectUnauthorized: true,
  timeout: 2176.11,
  keepAliveTime: 998.53,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 8684.78,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "yippee around hypothesise selfishly transcend winding",
  targetList: [
    "<value 1>",
    "<value 2>",
  ],
  recordType: "AAAA",
  scrapePort: 8063.57,
  nameList: [
    "<value 1>",
    "<value 2>",
  ],
  scrapeProtocol: "https",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: false,
  searchFilter: [
    {
      Name: "<value>",
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6075.34,
  username: "Kyra_Hilpert36",
  password: "NO7ljnE2qJgLYfa",
  credentialsSecret: "<value>",
};
```

