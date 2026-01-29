# CreateOutputUrlElastic

## Example Usage

```typescript
import { CreateOutputUrlElastic } from "cribl-control-plane/models/operations";

let value: CreateOutputUrlElastic = {
  url: "https://fair-pension.name/",
  weight: 3760.8,
  __template_url: "https://gigantic-wafer.com",
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                               | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | The URL to an Elastic node to send events to. Example: http://elastic:9200/_bulk                                                                                                    |
| `weight`                                                                                                                                                                            | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                                                                                                   |
| `templateUrl`                                                                                                                                                                       | *string*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime. |