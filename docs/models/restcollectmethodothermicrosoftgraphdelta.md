# RestCollectMethodOtherMicrosoftGraphDelta

Internal opt-in for the Microsoft Graph deltaLink state-tracking hook. Set programmatically by the Microsoft Graph source when the configured URL targets a /delta endpoint; not user-configurable.

## Example Usage

```typescript
import { RestCollectMethodOtherMicrosoftGraphDelta } from "cribl-control-plane/models";

let value: RestCollectMethodOtherMicrosoftGraphDelta = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `deltaLinkAttribute`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | Response-body field name to extract as the delta link (typically '@odata.deltaLink') |