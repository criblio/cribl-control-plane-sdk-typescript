# PipelineFunctionMaskConf

Configuration specific to the Pipeline Function.

## Example Usage

```typescript
import { PipelineFunctionMaskConf } from "cribl-control-plane/models";

let value: PipelineFunctionMaskConf = {
  rules: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `rules`                                                                                                | [models.PipelineFunctionMaskRule](../models/pipelinefunctionmaskrule.md)[]                             | :heavy_check_mark:                                                                                     | List of masking rules, each specifying a regex to match and an expression to replace matched content.  |
| `fields`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Fields on which to apply the masking rules. Supports * wildcards, except when used on internal fields. |
| `depth`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Depth to which the Mask Function will search for fields to mask                                        |
| `flags`                                                                                                | [models.PipelineFunctionMaskFlag](../models/pipelinefunctionmaskflag.md)[]                             | :heavy_minus_sign:                                                                                     | Fields to evaluate if one or more masking rules are matched                                            |