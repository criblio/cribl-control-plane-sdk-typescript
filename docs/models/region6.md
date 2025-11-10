# Region6

The SentinelOne region to send events to. In most cases you can find the region by either looking at your SentinelOne URL or knowing what geographic region your SentinelOne instance is contained in.

## Example Usage

```typescript
import { Region6 } from "cribl-control-plane/models";

let value: Region6 = "APS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"US" | "CA" | "EMEA" | "AP" | "APS" | "AU" | "Custom" | Unrecognized<string>
```