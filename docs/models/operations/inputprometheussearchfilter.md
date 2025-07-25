# InputPrometheusSearchFilter

## Example Usage

```typescript
import { InputPrometheusSearchFilter } from "cribl-control-plane/models/operations";

let value: InputPrometheusSearchFilter = {
  name: "<value>",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                 | Search filter attribute name, see: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html for more information. Attributes can be manually entered if not present in the drop down list |
| `values`                                                                                                                                                                                                           | *string*[]                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                 | Search Filter Values, if empty only "running" EC2 instances will be returned                                                                                                                                       |