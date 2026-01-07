# CollectorAzureBlobExtractor2

## Example Usage

```typescript
import { CollectorAzureBlobExtractor2 } from "cribl-control-plane/models";

let value: CollectorAzureBlobExtractor2 = {
  key: "<key>",
  expression: "<value>",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                                             | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | A token from the template path, such as epoch                                                                                                                                     |
| `expression`                                                                                                                                                                      | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | A JavaScript expression that accesses a corresponding <token> through the value variable and evaluates the token to populate event fields. Example: {date: new Date(+value*1000)} |