# FunctionConfSchemaSamplingRule

## Example Usage

```typescript
import { FunctionConfSchemaSamplingRule } from "cribl-control-plane/models";

let value: FunctionConfSchemaSamplingRule = {
  filter: "<value>",
  rate: 703296,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `filter`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | JavaScript filter expression matching events to be sampled. Use true to match all. |
| `rate`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | Sampling rate; picks one out of N matching events                                  |