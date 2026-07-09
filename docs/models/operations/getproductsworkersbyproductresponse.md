# GetProductsWorkersByProductResponse

## Example Usage

```typescript
import { GetProductsWorkersByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsWorkersByProductResponse = {
  result: {
    items: [
      {
        firstMsgTime: 698043,
        group: "<value>",
        id: "<id>",
        info: {
          architecture: "x64",
          cpus: 576212,
          cribl: {
            config: {},
            distMode: "worker",
            group: "<value>",
            guid: "<id>",
            startTime: 136388,
          },
          env: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          hostname: "shameless-skyline.org",
          node: "<value>",
          platform: "linux",
          release: "<value>",
          totalmem: 774740,
        },
        lastMsgTime: 405007,
        workerProcesses: 77624,
      },
    ],
    count: 189781,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `result`                                                                        | [models.PaginatedMasterWorkerEntry](../../models/paginatedmasterworkerentry.md) | :heavy_check_mark:                                                              | N/A                                                                             |