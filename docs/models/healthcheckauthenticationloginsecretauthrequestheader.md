# HealthCheckAuthenticationLoginSecretAuthRequestHeader

## Example Usage

```typescript
import { HealthCheckAuthenticationLoginSecretAuthRequestHeader } from "cribl-control-plane/models";

let value: HealthCheckAuthenticationLoginSecretAuthRequestHeader = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Header name.                                                           |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | JavaScript expression to compute the header value (can be a constant). |