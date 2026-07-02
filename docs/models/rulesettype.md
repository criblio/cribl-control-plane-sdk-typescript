# RulesetType

Type of ruleset to apply: dataset or datatype.

## Example Usage

```typescript
import { RulesetType } from "cribl-control-plane/models";

let value: RulesetType = "dataset";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"dataset" | "datatype" | Unrecognized<string>
```