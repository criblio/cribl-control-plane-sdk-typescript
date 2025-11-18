# MetadatumNewrelic

## Example Usage

```typescript
import { MetadatumNewrelic } from "cribl-control-plane/models";

let value: MetadatumNewrelic = {
  name: "hostname",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [models.FieldName](../models/fieldname.md)                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |