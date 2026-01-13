# InputKinesis


## Supported Types

### `operations.InputKinesisSendToRoutesTrueConstraint`

```typescript
const value: operations.InputKinesisSendToRoutesTrueConstraint = {
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "obediently who talkative",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputKinesisSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputKinesisSendToRoutesFalseWithConnectionsConstraint =
  {
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "kinesis",
    pipeline: "<value>",
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    pq: {
      pqControls: {},
    },
    streamName: "<value>",
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "bah finished farmer",
    awsApiKey: "<value>",
    awsSecret: "<value>",
  };
```

### `operations.InputKinesisPqEnabledFalseConstraint`

```typescript
const value: operations.InputKinesisPqEnabledFalseConstraint = {
  id: "<id>",
  type: "kinesis",
  pipeline: "<value>",
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
    pqControls: {},
  },
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "lava nectarine over er vivaciously beard joyful expense allegation versus",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputKinesisPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputKinesisPqEnabledTrueWithPqConstraint = {
  pq: {
    pqControls: {},
  },
  id: "<id>",
  type: "kinesis",
  pipeline: "<value>",
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
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "second-hand preside physically feather lustrous depart shudder",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

