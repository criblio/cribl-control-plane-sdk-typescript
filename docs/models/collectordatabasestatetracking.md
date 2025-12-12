# CollectorDatabaseStateTracking

## Example Usage

```typescript
import { CollectorDatabaseStateTracking } from "cribl-control-plane/models";

let value: CollectorDatabaseStateTracking = {
  enabled: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | Enable tracking of collection progress between consecutive scheduled executions. |