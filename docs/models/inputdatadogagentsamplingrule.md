# InputDatadogAgentSamplingRule

## Example Usage

```typescript
import { InputDatadogAgentSamplingRule } from "cribl-control-plane/models";

let value: InputDatadogAgentSamplingRule = {
  service: "<value>",
  environment: "<value>",
  rate: 3422.54,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Datadog service name                                             |
| `environment`                                                    | *string*                                                         | :heavy_check_mark:                                               | Datadog environment name (example: prod, staging)                |
| `rate`                                                           | *number*                                                         | :heavy_check_mark:                                               | Sampling rate for this service/environment combination (0.0–1.0) |