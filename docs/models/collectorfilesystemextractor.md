# CollectorFilesystemExtractor

## Example Usage

```typescript
import { CollectorFilesystemExtractor } from "cribl-control-plane/models";

let value: CollectorFilesystemExtractor = {
  key: "<key>",
  expression: "<value>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                           | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | A token from the template directory, such as epoch                                                                                              |
| `expression`                                                                                                                                    | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | JavaScript expression that receives token under "value" variable, and evaluates to populate event fields, such as {date: new Date(+value*1000)} |