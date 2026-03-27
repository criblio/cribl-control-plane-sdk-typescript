# FunctionConfSchemaSampling

## Example Usage

```typescript
import { FunctionConfSchemaSampling } from "cribl-control-plane/models";

let value: FunctionConfSchemaSampling = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `rules`                                                                                | [models.FunctionConfSchemaSamplingRule](../models/functionconfschemasamplingrule.md)[] | :heavy_minus_sign:                                                                     | Events matching these rules will be sampled at the given rate                          |