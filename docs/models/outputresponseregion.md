# OutputResponseRegion

The SentinelOne region to send events to. In most cases you can find the region by either looking at your SentinelOne URL or knowing what geographic region your SentinelOne instance is contained in.

## Example Usage

```typescript
import { OutputResponseRegion } from "cribl-control-plane/models";

let value: OutputResponseRegion = "AP";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"US" | "CA" | "EMEA" | "AP" | "APS" | "AU" | "Custom" | Unrecognized<string>
```