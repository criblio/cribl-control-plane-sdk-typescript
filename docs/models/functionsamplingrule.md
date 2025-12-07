# FunctionSamplingRule

## Example Usage

```typescript
import { FunctionSamplingRule } from "cribl-control-plane/models";

let value: FunctionSamplingRule = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `filter`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | JavaScript filter expression matching events to be sampled. Use true to match all. |
| `rate`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Sampling rate; picks one out of N matching events                                  |