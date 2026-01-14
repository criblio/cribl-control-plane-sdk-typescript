# InputEdgePrometheus


## Supported Types

### `operations.InputEdgePrometheusSendToRoutesTrueConstraint`

```typescript
const value: operations.InputEdgePrometheusSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "edge_prometheus",
  disabled: true,
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
  discoveryType: "ec2",
  interval: 7794.42,
  timeout: 1862.14,
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description:
    "until brr ha nucleotidase whereas sleepily sometimes bloom than whoever",
  targets: [
    {
      protocol: "https",
      host: "actual-birdcage.org",
      port: 9959.63,
      path: "/var/mail",
    },
  ],
  recordType: "AAAA",
  scrapePort: 1772.71,
  nameList: [
    "<value 1>",
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
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 999.13,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "afore basket question private athwart",
    },
  ],
  username: "Hailee.Powlowski",
  password: "Dob08sOJfqFqrf7",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheusSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputEdgePrometheusSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "edge_prometheus",
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
      "<value 2>",
    ],
    discoveryType: "ec2",
    interval: 6197.87,
    timeout: 1346.7,
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "except reckless uh-huh fatherly brightly gee developing",
    targets: [
      {
        protocol: "https",
        host: "actual-birdcage.org",
        port: 9959.63,
        path: "/var/mail",
      },
    ],
    recordType: "SRV",
    scrapePort: 2999.54,
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
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 7868.66,
    scrapeProtocolExpr: "<value>",
    scrapePortExpr: "<value>",
    scrapePathExpr: "<value>",
    podFilter: [
      {
        filter: "<value>",
        description: "afore basket question private athwart",
      },
    ],
    username: "Fabiola_Brakus",
    password: "lxKrJR0dQKyEkyP",
    credentialsSecret: "<value>",
  };
```

### `operations.InputEdgePrometheusPqEnabledFalseConstraint`

```typescript
const value: operations.InputEdgePrometheusPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "edge_prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "k8s-node",
  interval: 4990.25,
  timeout: 934.99,
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description:
    "ad ravel primary pity fooey usually furthermore finally monocle",
  targets: [
    {
      protocol: "https",
      host: "actual-birdcage.org",
      port: 9959.63,
      path: "/var/mail",
    },
  ],
  recordType: "A",
  scrapePort: 95.42,
  nameList: [
    "<value 1>",
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
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6104.36,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "afore basket question private athwart",
    },
  ],
  username: "Johnson_Reynolds",
  password: "9rVEA9g5hYAUt_p",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheusPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputEdgePrometheusPqEnabledTrueWithPqConstraint = {
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
  type: "edge_prometheus",
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
  discoveryType: "static",
  interval: 7461.05,
  timeout: 6465.43,
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "kubernetes",
  description: "moor tool fixed despite besides mammoth",
  targets: [
    {
      protocol: "https",
      host: "actual-birdcage.org",
      port: 9959.63,
      path: "/var/mail",
    },
  ],
  recordType: "A",
  scrapePort: 7037.85,
  nameList: [
    "<value 1>",
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
  reuseConnections: true,
  rejectUnauthorized: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 180.5,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "afore basket question private athwart",
    },
  ],
  username: "Jaylan.Howell",
  password: "hBsmCHbj_xsdCGz",
  credentialsSecret: "<value>",
};
```

