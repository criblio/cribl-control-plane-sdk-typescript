# HealthCheckAuthenticationLoginAuthRequestHeader

## Example Usage

```typescript
import { HealthCheckAuthenticationLoginAuthRequestHeader } from "cribl-control-plane/models";

let value: HealthCheckAuthenticationLoginAuthRequestHeader = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Header name.                                                           |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | JavaScript expression to compute the header value (can be a constant). |