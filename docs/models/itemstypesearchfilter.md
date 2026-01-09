# ItemsTypeSearchFilter

## Example Usage

```typescript
import { ItemsTypeSearchFilter } from "cribl-control-plane/models";

let value: ItemsTypeSearchFilter = {
  Name: "<value>",
  Values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html for information. Attributes can be manually entered if not present in the list. |
| `values`                                                                                                                                                              | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | Values to match within this row's attribute. If empty, search will return only running EC2 instances.                                                                 |