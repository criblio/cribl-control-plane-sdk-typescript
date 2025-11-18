# MetadatumTCP

## Example Usage

```typescript
import { MetadatumTCP } from "cribl-control-plane/models";

let value: MetadatumTCP = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |