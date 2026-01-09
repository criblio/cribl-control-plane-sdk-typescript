# ModeOptionsHost

Select level of detail for host metrics

## Example Usage

```typescript
import { ModeOptionsHost } from "cribl-control-plane/models";

let value: ModeOptionsHost = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```