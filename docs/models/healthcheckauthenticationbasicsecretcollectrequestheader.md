# HealthCheckAuthenticationBasicSecretCollectRequestHeader

## Example Usage

```typescript
import { HealthCheckAuthenticationBasicSecretCollectRequestHeader } from "cribl-control-plane/models";

let value: HealthCheckAuthenticationBasicSecretCollectRequestHeader = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Header Name                                                            |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | JavaScript expression to compute the header value (can be a constant). |