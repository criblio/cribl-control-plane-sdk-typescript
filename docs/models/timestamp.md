# Timestamp

## Example Usage

```typescript
import { Timestamp } from "cribl-control-plane/models";

let value: Timestamp = {
  regex: "<value>",
  strptime: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `regex`                                                    | *string*                                                   | :heavy_check_mark:                                         | Regex with first capturing group matching the timestamp    |
| `strptime`                                                 | *string*                                                   | :heavy_check_mark:                                         | Select or enter strptime format for the captured timestamp |