# CapturedEvent

## Example Usage

```typescript
import { CapturedEvent } from "cribl-control-plane/models";

let value: CapturedEvent = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `raw`                   | *string*                | :heavy_minus_sign:      | Raw event data.         |
| `time`                  | *number*                | :heavy_minus_sign:      | Timestamp of the event. |
| `additionalProperties`  | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |