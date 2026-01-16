# OutputElasticUrl

## Example Usage

```typescript
import { OutputElasticUrl } from "cribl-control-plane/models";

let value: OutputElasticUrl = {
  url: "https://wicked-mozzarella.biz",
  weight: 4920.02,
  __template_url: "https://tasty-gastropod.info",
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                               | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | The URL to an Elastic node to send events to. Example: http://elastic:9200/_bulk                                                                                                    |
| `weight`                                                                                                                                                                            | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                                                                                                   |
| `templateUrl`                                                                                                                                                                       | *string*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime. |