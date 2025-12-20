# CollectorGoogleCloudStorageExtractor3

## Example Usage

```typescript
import { CollectorGoogleCloudStorageExtractor3 } from "cribl-control-plane/models";

let value: CollectorGoogleCloudStorageExtractor3 = {
  key: "<key>",
  expression: "<value>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                           | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | A token from the template path, such as epoch                                                                                                   |
| `expression`                                                                                                                                    | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | JavaScript expression that receives token under "value" variable, and evaluates to populate event fields, such as {date: new Date(+value*1000)} |