# CreateOutputDatadogSite

Datadog site to which events should be sent

## Example Usage

```typescript
import { CreateOutputDatadogSite } from "cribl-control-plane/models/operations";

let value: CreateOutputDatadogSite = "us3";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"us" | "us3" | "us5" | "eu" | "fed1" | "ap1" | "custom" | Unrecognized<string>
```