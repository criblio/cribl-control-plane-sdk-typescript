# Operator

Comparison operator

## Example Usage

```typescript
import { Operator } from "cribl-control-plane/models";

let value: Operator = "=~";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"=" | "!=" | "=~" | "!~" | Unrecognized<string>
```