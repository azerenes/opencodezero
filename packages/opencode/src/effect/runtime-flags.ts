import { Config, ConfigProvider, Context, Effect, Layer } from "effect"
import { ConfigService } from "@/effect/config-service"

const bool = (name: string) => Config.boolean(name).pipe(Config.withDefault(false))
const positiveInteger = (name: string) =>
  Config.number(name).pipe(
    Config.map((value) => (Number.isInteger(value) && value > 0 ? value : undefined)),
    Config.orElse(() => Config.succeed(undefined)),
  )
const experimental = bool("PIXI_EXPERIMENTAL")
const enabledByExperimental = (name: string) =>
  Config.all({ experimental, enabled: bool(name) }).pipe(Config.map((flags) => flags.experimental || flags.enabled))

export class Service extends ConfigService.Service<Service>()("@opencode/RuntimeFlags", {
  autoShare: bool("PIXI_AUTO_SHARE"),
  pure: bool("PIXI_PURE"),
  disableDefaultPlugins: bool("PIXI_DISABLE_DEFAULT_PLUGINS"),
  disableChannelDb: bool("PIXI_DISABLE_CHANNEL_DB"),
  disableEmbeddedWebUi: bool("PIXI_DISABLE_EMBEDDED_WEB_UI"),
  disableExternalSkills: bool("PIXI_DISABLE_EXTERNAL_SKILLS"),
  disableLspDownload: bool("PIXI_DISABLE_LSP_DOWNLOAD"),
  skipMigrations: bool("PIXI_SKIP_MIGRATIONS"),
  disableClaudeCodePrompt: Config.all({
    broad: bool("PIXI_DISABLE_CLAUDE_CODE"),
    direct: bool("PIXI_DISABLE_CLAUDE_CODE_PROMPT"),
  }).pipe(Config.map((flags) => flags.broad || flags.direct)),
  disableClaudeCodeSkills: Config.all({
    broad: bool("PIXI_DISABLE_CLAUDE_CODE"),
    direct: bool("PIXI_DISABLE_CLAUDE_CODE_SKILLS"),
  }).pipe(Config.map((flags) => flags.broad || flags.direct)),
  enableExa: Config.all({
    experimental,
    enabled: bool("PIXI_ENABLE_EXA"),
    legacy: bool("PIXI_EXPERIMENTAL_EXA"),
  }).pipe(Config.map((flags) => flags.experimental || flags.enabled || flags.legacy)),
  enableParallel: Config.all({
    enabled: bool("PIXI_ENABLE_PARALLEL"),
    legacy: bool("PIXI_EXPERIMENTAL_PARALLEL"),
  }).pipe(Config.map((flags) => flags.enabled || flags.legacy)),
  enableExperimentalModels: bool("PIXI_ENABLE_EXPERIMENTAL_MODELS"),
  enableQuestionTool: bool("PIXI_ENABLE_QUESTION_TOOL"),
  experimentalScout: enabledByExperimental("PIXI_EXPERIMENTAL_SCOUT"),
  experimentalBackgroundSubagents: enabledByExperimental("PIXI_EXPERIMENTAL_BACKGROUND_SUBAGENTS"),
  experimentalLspTy: bool("PIXI_EXPERIMENTAL_LSP_TY"),
  experimentalLspTool: enabledByExperimental("PIXI_EXPERIMENTAL_LSP_TOOL"),
  experimentalOxfmt: enabledByExperimental("PIXI_EXPERIMENTAL_OXFMT"),
  experimentalPlanMode: enabledByExperimental("PIXI_EXPERIMENTAL_PLAN_MODE"),
  experimentalEventSystem: enabledByExperimental("PIXI_EXPERIMENTAL_EVENT_SYSTEM"),
  experimentalWorkspaces: enabledByExperimental("PIXI_EXPERIMENTAL_WORKSPACES"),
  experimentalIconDiscovery: enabledByExperimental("PIXI_EXPERIMENTAL_ICON_DISCOVERY"),
  outputTokenMax: positiveInteger("PIXI_EXPERIMENTAL_OUTPUT_TOKEN_MAX"),
  bashDefaultTimeoutMs: positiveInteger("PIXI_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS"),
  client: Config.string("PIXI_CLIENT").pipe(Config.withDefault("cli")),
}) {}

export type Info = Context.Service.Shape<typeof Service>

const emptyConfigLayer = Service.defaultLayer.pipe(
  Layer.provide(ConfigProvider.layer(ConfigProvider.fromUnknown({}))),
  Layer.orDie,
)

export const layer = (overrides: Partial<Info> = {}) =>
  Layer.effect(
    Service,
    Effect.gen(function* () {
      const flags = yield* Service
      return Service.of({ ...flags, ...overrides })
    }),
  ).pipe(Layer.provide(emptyConfigLayer))

export const defaultLayer = Service.defaultLayer.pipe(Layer.orDie)

export * as RuntimeFlags from "./runtime-flags"
