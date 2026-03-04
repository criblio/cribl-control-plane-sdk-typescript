# MetadataItem

## Example Usage

```typescript
import { MetadataItem } from "cribl-control-plane/models";

let value: MetadataItem = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Field name. Must be a valid identifier (letter, underscore, or $ followed by alphanumeric, or quoted). Surround with quotes or backticks if the name contains special characters. |
| `value`                                                                                                                                                                           | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | JavaScript expression to compute the field value, enclosed in quotes or backticks. Can evaluate to a constant.                                                                    |