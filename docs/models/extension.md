# Extension

## Example Usage

```typescript
import { Extension } from "cribl-control-plane/models";

let value: Extension = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | JavaScript expression to compute the value (can be constant) |