# CloudProvider

## Example Usage

```typescript
import { CloudProvider } from "cribl-control-plane/models";

let value: CloudProvider = "aws";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"aws" | "azure" | Unrecognized<string>
```