# AdditionalField

## Example Usage

```typescript
import { AdditionalField } from "cribl-control-plane/models";

let value: AdditionalField = {
  extraInField: "<value>",
  extraOutField: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `extraInField`                                               | *string*                                                     | :heavy_check_mark:                                           | Field name in which to find an IP to look up. Can be nested. |
| `extraOutField`                                              | *string*                                                     | :heavy_check_mark:                                           | Field name in which to store the GeoIP lookup results        |