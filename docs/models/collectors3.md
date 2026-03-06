# CollectorS3

S3 collector configuration

## Example Usage

```typescript
import { CollectorS3 } from "cribl-control-plane/models";

let value: CollectorS3 = {
  type: "s3",
  conf: {
    awsAuthenticationMethod: "auto",
    bucket: "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"s3"*                                                | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.S3CollectorConf*                              | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |