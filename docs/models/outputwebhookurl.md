# OutputWebhookUrl

## Example Usage

```typescript
import { OutputWebhookUrl } from "cribl-control-plane/models";

let value: OutputWebhookUrl = {
  url: "https://different-cheese.net",
  weight: 4905.86,
  __template_url: "https://well-groomed-drug.com",
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                               | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | URL of a webhook endpoint to send events to, such as http://localhost:10200                                                                                                         |
| `weight`                                                                                                                                                                            | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                                                                                                   |
| `templateUrl`                                                                                                                                                                       | *string*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime. |