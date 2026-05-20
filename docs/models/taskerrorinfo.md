# TaskErrorInfo

Serialized error object that describes why a job entered its current <code>state</code>. Includes <code>message</code> and may include a nested <code>reason</code> for wrapped errors.

## Example Usage

```typescript
import { TaskErrorInfo } from "cribl-control-plane/models";

let value: TaskErrorInfo = {
  message: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `message`                           | *string*                            | :heavy_check_mark:                  | Human-readable error message.       |
| `name`                              | *string*                            | :heavy_minus_sign:                  | Error name, if available.           |
| `stack`                             | *string*                            | :heavy_minus_sign:                  | Truncated stack trace of the error. |
| `additionalProperties`              | Record<string, *any*>               | :heavy_minus_sign:                  | N/A                                 |