# InputConfluentCloud


## Supported Types

### `models.InputConfluentCloudSendToRoutesTrueConstraint`

```typescript
const value: models.InputConfluentCloudSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "confluent_cloud",
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
  brokers: [
    "<value 1>",
  ],
  tls: {
    disabled: true,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 1424.18,
  requestTimeout: 8981.29,
  maxRetries: 5242.11,
  maxBackOff: 2284.09,
  initialBackoff: 9777.59,
  backoffRate: 463.4,
  authenticationTimeout: 4845.5,
  reauthenticationThreshold: 8208.11,
  sasl: {
    disabled: false,
    username: "Lilyan_Kub66",
    password: "pD36Q7Bu1OSy91K",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "kerberos",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://victorious-tectonics.net",
    clientId: "<id>",
    oauthSecretType: "<value>",
    clientTextSecret: "<value>",
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    saslExtensions: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  sessionTimeout: 9946.26,
  rebalanceTimeout: 6471.79,
  heartbeatInterval: 716.66,
  autoCommitInterval: 6265.77,
  autoCommitThreshold: 8272.36,
  maxBytesPerPartition: 6810.9,
  maxBytes: 6447.64,
  maxSocketErrors: 7959.99,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "an pneumonia next scarcely anenst",
};
```

### `models.InputConfluentCloudSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputConfluentCloudSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "confluent_cloud",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
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
    brokers: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
    topics: [
      "<value 1>",
      "<value 2>",
    ],
    groupId: "<id>",
    fromBeginning: false,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://unfinished-decongestant.org",
      connectionTimeout: 5018.66,
      requestTimeout: 4285.6,
      maxRetries: 9127.09,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.3",
      },
    },
    connectionTimeout: 4774,
    requestTimeout: 1014.26,
    maxRetries: 264.54,
    maxBackOff: 2147.45,
    initialBackoff: 5893.28,
    backoffRate: 3926.87,
    authenticationTimeout: 9511.36,
    reauthenticationThreshold: 8209.86,
    sasl: {
      disabled: false,
      username: "Lilyan_Kub66",
      password: "pD36Q7Bu1OSy91K",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "kerberos",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://victorious-tectonics.net",
      clientId: "<id>",
      oauthSecretType: "<value>",
      clientTextSecret: "<value>",
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      saslExtensions: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
    sessionTimeout: 7535.67,
    rebalanceTimeout: 8269.72,
    heartbeatInterval: 7113.57,
    autoCommitInterval: 6649.78,
    autoCommitThreshold: 113.28,
    maxBytesPerPartition: 6847.05,
    maxBytes: 9792.81,
    maxSocketErrors: 4564.55,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description:
      "modulo well-worn scrape stir-fry apropos solemnly behind once regarding",
  };
```

### `models.InputConfluentCloudPqEnabledFalseConstraint`

```typescript
const value: models.InputConfluentCloudPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "confluent_cloud",
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
  brokers: [
    "<value 1>",
  ],
  tls: {
    disabled: true,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  topics: [],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 9357.63,
  requestTimeout: 9523.02,
  maxRetries: 3601.27,
  maxBackOff: 5745.92,
  initialBackoff: 7615.46,
  backoffRate: 1727.39,
  authenticationTimeout: 8769.39,
  reauthenticationThreshold: 8495.25,
  sasl: {
    disabled: false,
    username: "Lilyan_Kub66",
    password: "pD36Q7Bu1OSy91K",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "kerberos",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://victorious-tectonics.net",
    clientId: "<id>",
    oauthSecretType: "<value>",
    clientTextSecret: "<value>",
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    saslExtensions: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  sessionTimeout: 2882.55,
  rebalanceTimeout: 5618.69,
  heartbeatInterval: 3080.35,
  autoCommitInterval: 2550.68,
  autoCommitThreshold: 3402.81,
  maxBytesPerPartition: 6141.72,
  maxBytes: 4945.15,
  maxSocketErrors: 8345.58,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "cornet microchip indeed greedy rapid phooey sure-footed excitedly regarding veto",
};
```

### `models.InputConfluentCloudPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputConfluentCloudPqEnabledTrueWithPqConstraint = {
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
  type: "confluent_cloud",
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 9361.56,
  requestTimeout: 4797.88,
  maxRetries: 7973.51,
  maxBackOff: 5441.99,
  initialBackoff: 6359.81,
  backoffRate: 877.96,
  authenticationTimeout: 8028.47,
  reauthenticationThreshold: 5332.14,
  sasl: {
    disabled: false,
    username: "Lilyan_Kub66",
    password: "pD36Q7Bu1OSy91K",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "kerberos",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://victorious-tectonics.net",
    clientId: "<id>",
    oauthSecretType: "<value>",
    clientTextSecret: "<value>",
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    saslExtensions: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  sessionTimeout: 9983,
  rebalanceTimeout: 6705.97,
  heartbeatInterval: 2141.67,
  autoCommitInterval: 9821.92,
  autoCommitThreshold: 7929.51,
  maxBytesPerPartition: 2628.38,
  maxBytes: 1387.79,
  maxSocketErrors: 1784.63,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "outlandish yahoo crystallize aha unaccountably exterior eyebrow",
};
```

