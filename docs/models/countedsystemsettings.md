# CountedSystemSettings

## Example Usage

```typescript
import { CountedSystemSettings } from "cribl-control-plane/models";

let value: CountedSystemSettings = {
  count: 278127,
  items: [
    {
      api: {
        baseUrl: "https://crushing-intervention.net/",
        disableApiCache: false,
        disabled: false,
        headers: {
          "key": "<value>",
          "key1": "<value>",
        },
        host: "beloved-suv.net",
        idleSessionTTL: 8362.31,
        listenOnPort: false,
        loginRateLimit: "<value>",
        port: 3905.62,
        protocol: "<value>",
        scripts: true,
        sensitiveFields: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        ssl: {
          caPath: "<value>",
          certPath: "<value>",
          disabled: false,
          passphrase: "<value>",
          privKeyPath: "<value>",
        },
        ssoRateLimit: "<value>",
        workerRemoteAccess: false,
      },
      auth: {
        fallback: false,
        fallbackBadLogin: true,
        filterType: "<value>",
        host: "rundown-summer.info",
        port: 7523.03,
        ssl: false,
        type: "splunk",
      },
      backups: {
        backupPersistence: "<value>",
        backupsDirectory: "<value>",
      },
      customLogo: {
        enabled: true,
        logoDescription: "<value>",
        logoImage: "<value>",
      },
      distributed: {
        mode: "single",
      },
      fips: true,
      git: {
        authType: "<value>",
        autoAction: "<value>",
        autoActionMessage: "<value>",
        autoActionSchedule: "<value>",
        branch: "<value>",
        commitDeploySingleAction: true,
        copilotAutoGitCommitMessages: false,
        defaultCommitMessage: "<value>",
        gitOps: "none",
        password: "m6brH3inWpyfKI6",
        remote: "<value>",
        sshKey: "<value>",
        strictHostKeyChecking: true,
        timeout: 8353.81,
        user: "Suzanne22",
      },
      jobLimits: {
        concurrentJobLimit: 8245.31,
        concurrentScheduledJobLimit: 3483.37,
        concurrentSystemJobLimit: 5367.36,
        concurrentSystemTaskLimit: 5853.34,
        concurrentTaskLimit: 2427.17,
        disableTasks: false,
        finishedJobArtifactsLimit: 5339.33,
        finishedTaskArtifactsLimit: 5374.97,
        jobArtifactsReaperPeriod: "<value>",
        jobTimeout: "<value>",
        maxTaskPerc: 5191.29,
        schedulingPolicy: "<value>",
        taskHeartbeatPeriod: 3527.04,
        taskManifestFlushPeriodMs: 3428.83,
        taskManifestMaxBufferSize: 6680.89,
        taskManifestReadBufferSize: "<value>",
        taskPollTimeoutMs: 2578.02,
      },
      limits: {
        cpuProfileTTL: "<value>",
        disableMetricsAccessorCache: false,
        edgeMetricsCustomExpression: "<value>",
        edgeMetricsMode: "minimal",
        edgeNodesCount: 2185.44,
        enableMetricsPersistence: false,
        enableWorkerPersistence: false,
        eventsMetadataSources: [
          "<value 1>",
          "<value 2>",
        ],
        largeEventsThreshold: "<value>",
        lookupMaxSize: "<value>",
        lookupMaxTotalSize: "<value>",
        maxDimensionValueSize: 2867.08,
        maxMetrics: 7892.1,
        maxPQSize: "<value>",
        maxReconnectInterval: "<value>",
        metricsDirectory: "<value>",
        metricsDropList: [
          "<value 1>",
          "<value 2>",
        ],
        metricsFieldsBlacklist: [
          "<value 1>",
          "<value 2>",
        ],
        metricsGCPeriod: "<value>",
        metricsMaxCardinality: 4933,
        metricsMaxDiskSpace: "<value>",
        metricsNeverDropList: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        metricsWorkerIdBlacklist: [],
        minFreeSpace: "<value>",
        minReconnectInterval: "<value>",
        netFlowTemplateFlushInterval: 2933.84,
        randomReconnectInterval: "<value>",
        samples: {
          maxSize: "<value>",
        },
        workerMaxMetrics: 3454.03,
      },
      pii: {
        enablePiiDetection: true,
      },
      proxy: {
        useEnvVars: true,
      },
      redisCacheLimits: {
        clientTrackingMechanism: "<value>",
        enableServerAssist: true,
        keyTTLSecs: 5714.83,
        maxCacheSize: 8814.23,
        maxNumKeys: 3162.71,
        servicePeriodSecs: 3023.9,
      },
      redisLimits: {
        connections: {
          disabled: true,
          maxConnections: 9453.02,
        },
      },
      rollback: {
        rollbackEnabled: false,
        rollbackRetries: 528.65,
        rollbackTimeout: 4633.52,
      },
      searchLimits: {
        compressObjectCacheArtifacts: false,
        fieldSummaryMaxFields: 8570.16,
        fieldSummaryMaxNestedDepth: 8635.05,
        maxConcurrentSearches: 2506.23,
        maxExecutorsPerSearch: 9318.6,
        maxResultsPerSearch: 9327.03,
        maxSearchDuration: "<value>",
        searchHistoryMaxJobs: 6660.56,
        searchHistoryTTL: "<value>",
        searchQueueLength: "<value>",
        warmPoolSize: 9291.32,
        writeOnlyProviderSecrets: false,
      },
      servicesLimits: {
        connections: {
          memoryLimit: "<value>",
          procs: "auto",
        },
        metrics: {
          memoryLimit: "<value>",
          procs: 1275.01,
        },
        notifications: {
          memoryLimit: "<value>",
          procs: 5172.91,
        },
      },
      shutdown: {
        drainTimeout: 7276.98,
      },
      sni: {
        disableSNIRouting: false,
      },
      sockets: {
        directory: "/root",
      },
      support: {
        featureFlagOverrides: [
          {
            disabled: false,
            flagId: "<id>",
          },
        ],
      },
      system: {
        intercom: true,
        upgrade: "api",
      },
      tls: {
        defaultCipherList: "<value>",
        defaultEcdhCurve: "<value>",
        maxVersion: "<value>",
        minVersion: "<value>",
        rejectUnauthorized: true,
      },
      upgradeGroupSettings: {
        isRolling: false,
        quantity: 4087.94,
        retryCount: 6166.12,
        retryDelay: 17.98,
      },
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: true,
        enableLegacyEdgeUpgrade: true,
        packageUrls: [
          {
            packageHashUrl: "https://utilized-equal.org",
            packageUrl: "https://raw-bidet.com",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 8687.03,
        enableHeapSnapshots: true,
        loadThrottlePerc: 3636.52,
        memory: 5805.06,
        minimum: 7288.22,
        startupMaxConns: 7272.44,
        startupThrottleTimeout: 2133.84,
        v8SingleThread: false,
      },
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.SystemSettings](../models/systemsettings.md)[] | :heavy_minus_sign:                                     | N/A                                                    |