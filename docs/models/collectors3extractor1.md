# CollectorS3Extractor1

## Example Usage

```typescript
import { CollectorS3Extractor1 } from "cribl-control-plane/models";

let value: CollectorS3Extractor1 = {
  key: "<key>",
  expression: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                            | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | A token from the template path, such as epoch                                                                                                    |
| `expression`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | JavaScript expression that receives token under "value" variable, and evaluates to populate event fields. Example: {date: new Date(+value*1000)} |