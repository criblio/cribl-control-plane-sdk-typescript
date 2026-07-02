# GetProductsWorkersByProductResponseBody

List of MasterWorkerEntry objects.


## Supported Types

### `models.CountedMasterWorkerEntry`

```typescript
const value: models.CountedMasterWorkerEntry = {
  items: [
    {
      firstMsgTime: 884551,
      group: "<value>",
      id: "<id>",
      info: {
        architecture: "x64",
        cpus: 655075,
        cribl: {
          config: {},
          distMode: "worker",
          group: "<value>",
          guid: "<id>",
          startTime: 409281,
        },
        env: {
          "key": "<value>",
          "key1": "<value>",
        },
        hostname: "understated-waist.info",
        node: "<value>",
        platform: "linux",
        release: "<value>",
        totalmem: 130666,
      },
      lastMsgTime: 772877,
      workerProcesses: 545963,
    },
  ],
};
```

### `models.PaginatedMasterWorkerEntry`

```typescript
const value: models.PaginatedMasterWorkerEntry = {
  items: [],
  count: 599046,
  offset: 85352,
  limit: 606388,
};
```

