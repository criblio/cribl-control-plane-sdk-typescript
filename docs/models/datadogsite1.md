# DatadogSite1

Datadog site to which events should be sent

## Example Usage

```typescript
import { DatadogSite1 } from "cribl-control-plane/models";

let value: DatadogSite1 = "us5";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"us" | "us3" | "us5" | "eu" | "fed1" | "ap1" | "custom" | Unrecognized<string>
```