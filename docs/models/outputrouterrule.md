# OutputRouterRule

## Example Usage

```typescript
import { OutputRouterRule } from "cribl-control-plane/models";

let value: OutputRouterRule = {
  filter: "<value>",
  output: "<value>",
  description:
    "mortise weatherize per scenario instead shrill flight mathematics",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filter`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | JavaScript expression to select events to send to output                         |
| `output`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Output to send matching events to                                                |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Description of this rule's purpose                                               |
| `final`                                                                          | *boolean*                                                                        | :heavy_minus_sign:                                                               | Flag to control whether to stop the event from being checked against other rules |