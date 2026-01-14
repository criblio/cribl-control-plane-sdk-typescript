# CollectorFilesystem

Filesystem collector configuration

## Example Usage

```typescript
import { CollectorFilesystem } from "cribl-control-plane/models";

let value: CollectorFilesystem = {
  type: "filesystem",
  conf: {
    outputName: "<value>",
    path: "/Library",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: false,
    maxBatchSize: 4087.23,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"filesystem"*                                                         | :heavy_check_mark:                                                     | Collector type                                                         |
| `conf`                                                                 | [models.FilesystemCollectorConf](../models/filesystemcollectorconf.md) | :heavy_check_mark:                                                     | N/A                                                                    |