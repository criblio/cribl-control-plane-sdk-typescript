# CollectorFilesystem

Filesystem collector configuration

## Example Usage

```typescript
import { CollectorFilesystem } from "cribl-control-plane/models";

let value: CollectorFilesystem = {
  type: "filesystem",
  conf: {
    outputName: "<value>",
    path: "/private",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: false,
    maxBatchSize: 8097.94,
  },
  destructive: true,
  encoding: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"filesystem"*                                                         | :heavy_check_mark:                                                     | Collector type                                                         |
| `conf`                                                                 | [models.FilesystemCollectorConf](../models/filesystemcollectorconf.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `destructive`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | Delete any files collected (where applicable)                          |
| `encoding`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Character encoding to use when parsing ingested data.                  |