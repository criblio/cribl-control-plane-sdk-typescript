# CollectorS3

S3 collector configuration

## Example Usage

```typescript
import { CollectorS3 } from "cribl-control-plane/models";

let value: CollectorS3 = {
  type: "s3",
  conf: {
    outputName: "<value>",
    bucket: "<value>",
    region: "<value>",
    path: "/boot",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    recurse: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"s3"*                                                 | :heavy_check_mark:                                     | Collector type: s3                                     |
| `conf`                                                 | [models.S3CollectorConf](../models/s3collectorconf.md) | :heavy_check_mark:                                     | N/A                                                    |