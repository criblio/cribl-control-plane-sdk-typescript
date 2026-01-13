# InputConfluentCloud


## Supported Types

### `models.InputConfluentCloudSendToRoutesTrueConstraint`

```typescript
const value: models.InputConfluentCloudSendToRoutesTrueConstraint = {
  id: "<id>",
  type: "confluent_cloud",
  pipeline: "<value>",
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
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  tls: {
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
    "<value 3>",
  ],
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  sasl: {
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://alive-spear.com",
    clientId: "<id>",
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
  autoCommitInterval: 3318.81,
  autoCommitThreshold: 2609.79,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "phooey slip pretend atop dulcimer gee",
};
```

### `models.InputConfluentCloudSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputConfluentCloudSendToRoutesFalseWithConnectionsConstraint = {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "confluent_cloud",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    pq: {
      pqControls: {},
    },
    brokers: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
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
    kafkaSchemaRegistry: {
      auth: {
        credentialsSecret: "<value>",
      },
      tls: {
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
    },
    sasl: {
      username: "Jocelyn_Casper88",
      password: "PIwQ9BxwvdkIdNi",
      credentialsSecret: "<value>",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      tokenUrl: "https://alive-spear.com",
      clientId: "<id>",
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
    autoCommitInterval: 8868.89,
    autoCommitThreshold: 7700.66,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "harangue advanced really shocked never dimly miserably",
  };
```

### `models.InputConfluentCloudPqEnabledFalseConstraint`

```typescript
const value: models.InputConfluentCloudPqEnabledFalseConstraint = {
  id: "<id>",
  type: "confluent_cloud",
  pipeline: "<value>",
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
    pqControls: {},
  },
  brokers: [],
  tls: {
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
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  sasl: {
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://alive-spear.com",
    clientId: "<id>",
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
  autoCommitInterval: 3059.05,
  autoCommitThreshold: 3293.82,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "contravene fledgling madly",
};
```

### `models.InputConfluentCloudPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputConfluentCloudPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "confluent_cloud",
  pipeline: "<value>",
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
  brokers: [
    "<value 1>",
  ],
  tls: {
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
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  sasl: {
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://alive-spear.com",
    clientId: "<id>",
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
  autoCommitInterval: 492.51,
  autoCommitThreshold: 8007.15,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "bright service swim nice maintainer shrill",
};
```

