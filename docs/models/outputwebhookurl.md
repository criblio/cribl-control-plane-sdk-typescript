# OutputWebhookUrl

## Example Usage

```typescript
import { OutputWebhookUrl } from "cribl-control-plane/models";

let value: OutputWebhookUrl = {
  url: "https://different-cheese.net",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | URL of a webhook endpoint to send events to, such as http://localhost:10200       |
| `weight`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability |