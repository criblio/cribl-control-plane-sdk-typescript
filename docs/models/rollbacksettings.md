# RollbackSettings

## Example Usage

```typescript
import { RollbackSettings } from "cribl-control-plane/models";

let value: RollbackSettings = {
  rollbackEnabled: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `rollbackEnabled`                                                                                   | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | If <code>true</code>, enable automatic rollback if an upgrade fails. Otherwise, <code>false</code>. |
| `rollbackRetries`                                                                                   | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Number of times to retry a rollback before marking it as failed.                                    |
| `rollbackTimeout`                                                                                   | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Maximum duration in milliseconds to wait for a rollback to complete before marking it as failed.    |