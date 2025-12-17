# RunnableJobCollectionCollector

## Example Usage

```typescript
import { RunnableJobCollectionCollector } from "cribl-control-plane/models";

let value: RunnableJobCollectionCollector = {
  type: "<value>",
  conf: {
    type: "filesystem",
    outputName: "<value>",
    path: "/home",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: true,
    maxBatchSize: 10,
  },
  encoding: "<value>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The type of collector to run                                                                                                                              |
| `conf`                                                                                                                                                    | *models.CollectorConf*                                                                                                                                    | :heavy_check_mark:                                                                                                                                        | Collector configuration                                                                                                                                   |
| `destructive`                                                                                                                                             | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Delete any files collected (where applicable)                                                                                                             |
| `encoding`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Character encoding to use when parsing ingested data. When not set, @{product} will default to UTF-8 but may incorrectly interpret multi-byte characters. |