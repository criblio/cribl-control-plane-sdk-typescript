# GitOpsType

## Example Usage

```typescript
import { GitOpsType } from "cribl-control-plane/models";

let value: GitOpsType = "pull";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "pull" | "push" | Unrecognized<string>
```