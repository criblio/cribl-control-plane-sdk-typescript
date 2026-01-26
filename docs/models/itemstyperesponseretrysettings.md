# ItemsTypeResponseRetrySettings

## Example Usage

```typescript
import { ItemsTypeResponseRetrySettings } from "cribl-control-plane/models";

let value: ItemsTypeResponseRetrySettings = {
  httpStatus: 8143.95,
  initialBackoff: 9094.38,
  backoffRate: 7400.03,
  maxBackoff: 9558.58,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpStatus`                                                                                                                                                    | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The HTTP response status code that will trigger retries                                                                                                         |
| `initialBackoff`                                                                                                                                                | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | How long, in milliseconds, Cribl Stream should wait before initiating backoff. Maximum interval is 600,000 ms (10 minutes).                                     |
| `backoffRate`                                                                                                                                                   | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Base for exponential backoff. A value of 2 (default) means Cribl Stream will retry after 2 seconds, then 4 seconds, then 8 seconds, etc.                        |
| `maxBackoff`                                                                                                                                                    | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The maximum backoff interval, in milliseconds, Cribl Stream should apply. Default (and minimum) is 10,000 ms (10 seconds); maximum is 180,000 ms (180 seconds). |