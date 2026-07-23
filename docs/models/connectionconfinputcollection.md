# ConnectionConfInputCollection

## Example Usage

```typescript
import { ConnectionConfInputCollection } from "cribl-control-plane/models";

let value: ConnectionConfInputCollection = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pipeline`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Pipeline or Pack to process data before sending to the Destination. |
| `output`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Destination to send data to when not using Routes.                  |