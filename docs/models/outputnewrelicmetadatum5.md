# OutputNewrelicMetadatum5

## Example Usage

```typescript
import { OutputNewrelicMetadatum5 } from "cribl-control-plane/models";

let value: OutputNewrelicMetadatum5 = {
  name: "service",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [models.FieldName5](../models/fieldname5.md)                                                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |