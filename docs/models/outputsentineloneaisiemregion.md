# OutputSentinelOneAiSiemRegion

The SentinelOne region to send events to. In most cases you can find the region by either looking at your SentinelOne URL or knowing what geographic region your SentinelOne instance is contained in.

## Example Usage

```typescript
import { OutputSentinelOneAiSiemRegion } from "cribl-control-plane/models";

let value: OutputSentinelOneAiSiemRegion = "EMEA";
```

## Values

```typescript
"US" | "CA" | "EMEA" | "AP" | "APS" | "AU" | "Custom"
```