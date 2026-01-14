# InputGooglePubsub


## Supported Types

### `operations.InputGooglePubsubSendToRoutesTrueConstraint`

```typescript
const value: operations.InputGooglePubsubSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "google_pubsub",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: true,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "secret",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 4271.43,
  concurrency: 8743.58,
  requestTimeout: 4366.2,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "courageous excited what",
  orderedDelivery: false,
};
```

### `operations.InputGooglePubsubSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputGooglePubsubSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "google_pubsub",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
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
    topicName: "<value>",
    subscriptionName: "<value>",
    monitorSubscription: false,
    createTopic: false,
    createSubscription: false,
    region: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxBacklog: 8934.12,
    concurrency: 4542.48,
    requestTimeout: 7563.26,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "greatly howl sternly yahoo bowed a mmm yowza",
    orderedDelivery: false,
  };
```

### `operations.InputGooglePubsubPqEnabledFalseConstraint`

```typescript
const value: operations.InputGooglePubsubPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "google_pubsub",
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: true,
  createTopic: true,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "auto",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 3809.78,
  concurrency: 1561.87,
  requestTimeout: 7588.66,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "as slope furthermore blah veto fashion since mediocre sin savour",
  orderedDelivery: true,
};
```

### `operations.InputGooglePubsubPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputGooglePubsubPqEnabledTrueWithPqConstraint = {
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
  type: "google_pubsub",
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: true,
  createTopic: true,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "manual",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 2518.02,
  concurrency: 4380.03,
  requestTimeout: 3995.83,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "zowie gadzooks scheme yahoo think oily focused",
  orderedDelivery: false,
};
```

