---
agent: agent
tools:['runCommands', 'runTasks', 'edit', 'runNotebooks', 'search', 'new', 'Azure MCP Server/search', 'github/add_issue_comment', 'github/issue_read', 'github/issue_write', 'github/list_issue_types', 'github/list_issues', 'github/search_issues', 'github/sub_issue_write', 'Azure MCP/search', 'extensions', 'todos', 'runSubagent', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'github.vscode-pull-request-github/copilotCodingAgent', 'github.vscode-pull-request-github/issue_fetch', 'github.vscode-pull-request-github/suggest-fix', 'github.vscode-pull-request-github/searchSyntax', 'github.vscode-pull-request-github/doSearch', 'github.vscode-pull-request-github/renderIssues', 'github.vscode-pull-request-github/activePullRequest', 'github.vscode-pull-request-github/openPullRequest']
---

指定されたGitHubのIssueを分析して、そのIssueを解決するための実装計画を立ててください。以下の点に注意してください：
1. Issueの内容を正確に理解し、必要な背景情報を収集してください。
2. 実装に必要な主要なステップをリストアップし、それぞれのステップに対して具体的なタスクを定義してください。
3. 各タスクに対して、必要なリソースや参考資料を明示してください。
4. 実装の優先順位を考慮し、効率的なスケジュールを提案してください。
5. 実装に伴い不足している情報や不明点があれば、それらを明確にしてください。

最終的な出力は、実装計画として整理してIssueコメントとして追加してください。