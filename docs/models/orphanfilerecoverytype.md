# OrphanFileRecoveryType

## Example Usage

```typescript
import { OrphanFileRecoveryType } from "cribl-control-plane/models";

let value: OrphanFileRecoveryType = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Periodically scan the staging directory for files not tracked by any Worker manifest to recover them |
| `periodMin`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Minimum interval between reconciliation runs                                                         |