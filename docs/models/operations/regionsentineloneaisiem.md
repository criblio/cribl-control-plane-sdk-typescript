# RegionSentinelOneAiSiem

The SentinelOne region to send events to. In most cases you can find the region by either looking at your SentinelOne URL or knowing what geographic region your SentinelOne instance is contained in.

## Example Usage

```typescript
import { RegionSentinelOneAiSiem } from "cribl-control-plane/models/operations";

let value: RegionSentinelOneAiSiem = "US";
```

## Values

```typescript
"US" | "CA" | "EMEA" | "AP" | "APS" | "AU" | "Custom"
```