# CollectorRest

Rest collector configuration

## Example Usage

```typescript
import { CollectorRest } from "cribl-control-plane/models";

let value: CollectorRest = {
  type: "rest",
  conf: {
    authentication: "hmac",
    hmacFunctionId: "<id>",
    collectUrl: "https://simplistic-cardboard.biz/",
    collectMethod: "other",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"rest"*                                              | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.RestCollectorConf*                            | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |