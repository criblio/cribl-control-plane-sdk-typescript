# DatabaseCollectorConfStateTracking

## Example Usage

```typescript
import { DatabaseCollectorConfStateTracking } from "cribl-control-plane/models";

let value: DatabaseCollectorConfStateTracking = {
  enabled: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | Enable tracking of collection progress between consecutive scheduled executions. |