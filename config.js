/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "SET YOUR COOKIE HERE",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 2,
  CookieIndex: 0,
  ProxyPassword: "831021",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
