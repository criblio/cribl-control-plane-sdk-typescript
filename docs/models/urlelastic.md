# UrlElastic

## Example Usage

```typescript
import { UrlElastic } from "cribl-control-plane/models";

let value: UrlElastic = {
  url: "https://cloudy-decongestant.name",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The URL to an Elastic node to send events to. Example: http://elastic:9200/_bulk  |
| `weight`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability |