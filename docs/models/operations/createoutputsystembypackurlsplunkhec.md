# CreateOutputSystemByPackUrlSplunkHec

## Example Usage

```typescript
import { CreateOutputSystemByPackUrlSplunkHec } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackUrlSplunkHec = {
  url: "https://authentic-airman.biz/",
  weight: 3084.86,
  __template_url: "https://babyish-shore.info",
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                               | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | URL to a Splunk HEC endpoint to send events to, e.g., http://localhost:8088/services/collector/event                                                                                |
| `weight`                                                                                                                                                                            | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                                                                                                   |
| `templateUrl`                                                                                                                                                                       | *string*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime. |