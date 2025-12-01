# Upgrade

## Example Usage

```typescript
import { Upgrade } from "cribl-control-plane/models";

let value: Upgrade = "api";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"false" | "api" | Unrecognized<string>
```