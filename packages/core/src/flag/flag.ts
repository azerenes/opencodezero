import { Config } from "effect"

function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const PIXI_EXPERIMENTAL = truthy("PIXI_EXPERIMENTAL")
const copy = process.env["PIXI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  PIXI_AUTO_HEAP_SNAPSHOT: truthy("PIXI_AUTO_HEAP_SNAPSHOT"),
  PIXI_GIT_BASH_PATH: process.env["PIXI_GIT_BASH_PATH"],
  PIXI_CONFIG: process.env["PIXI_CONFIG"],
  PIXI_CONFIG_CONTENT: process.env["PIXI_CONFIG_CONTENT"],
  PIXI_DISABLE_AUTOUPDATE: truthy("PIXI_DISABLE_AUTOUPDATE"),
  PIXI_ALWAYS_NOTIFY_UPDATE: truthy("PIXI_ALWAYS_NOTIFY_UPDATE"),
  PIXI_DISABLE_PRUNE: truthy("PIXI_DISABLE_PRUNE"),
  PIXI_DISABLE_TERMINAL_TITLE: truthy("PIXI_DISABLE_TERMINAL_TITLE"),
  PIXI_SHOW_TTFD: truthy("PIXI_SHOW_TTFD"),
  PIXI_PERMISSION: process.env["PIXI_PERMISSION"],
  PIXI_DISABLE_AUTOCOMPACT: truthy("PIXI_DISABLE_AUTOCOMPACT"),
  PIXI_DISABLE_MODELS_FETCH: truthy("PIXI_DISABLE_MODELS_FETCH"),
  PIXI_DISABLE_MOUSE: truthy("PIXI_DISABLE_MOUSE"),
  PIXI_FAKE_VCS: process.env["PIXI_FAKE_VCS"],
  PIXI_SERVER_PASSWORD: process.env["PIXI_SERVER_PASSWORD"],
  PIXI_SERVER_USERNAME: process.env["PIXI_SERVER_USERNAME"],

  // Experimental
  PIXI_EXPERIMENTAL_FILEWATCHER: Config.boolean("PIXI_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  PIXI_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("PIXI_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  PIXI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("PIXI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  PIXI_MODELS_URL: process.env["PIXI_MODELS_URL"],
  PIXI_MODELS_PATH: process.env["PIXI_MODELS_PATH"],
  PIXI_DB: process.env["PIXI_DB"],

  PIXI_WORKSPACE_ID: process.env["PIXI_WORKSPACE_ID"],
  PIXI_EXPERIMENTAL_WORKSPACES: PIXI_EXPERIMENTAL || truthy("PIXI_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get PIXI_DISABLE_PROJECT_CONFIG() {
    return truthy("PIXI_DISABLE_PROJECT_CONFIG")
  },
  get PIXI_TUI_CONFIG() {
    return process.env["PIXI_TUI_CONFIG"]
  },
  get PIXI_CONFIG_DIR() {
    return process.env["PIXI_CONFIG_DIR"]
  },
  get PIXI_PURE() {
    return truthy("PIXI_PURE")
  },
  get PIXI_PLUGIN_META_FILE() {
    return process.env["PIXI_PLUGIN_META_FILE"]
  },
  get PIXI_CLIENT() {
    return process.env["PIXI_CLIENT"] ?? "cli"
  },
}
