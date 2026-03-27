# EnvVar

## Example Usage

```typescript
import { EnvVar } from "cribl-control-plane/models";

let value: EnvVar = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Environment variable name                                                                                                     |
| `value`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | JavaScript expression to compute environment variable's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |