# DatadogSite

Datadog site to which events should be sent

## Example Usage

```typescript
import { DatadogSite } from "cribl-control-plane/models";

let value: DatadogSite = "us5";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"us" | "us3" | "us5" | "eu" | "fed1" | "ap1" | "custom" | Unrecognized<string>
```