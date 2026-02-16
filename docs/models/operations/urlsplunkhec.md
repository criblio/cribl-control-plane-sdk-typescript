# UrlSplunkHec

## Example Usage

```typescript
import { UrlSplunkHec } from "cribl-control-plane/models/operations";

let value: UrlSplunkHec = {
  url: "https://stunning-retention.net",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | URL to a Splunk HEC endpoint to send events to, e.g., http://localhost:8088/services/collector/event |
| `weight`                                                                                             | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                    |