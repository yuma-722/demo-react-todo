# demo-react-todo

Vite + React + TypeScript を使用したシンプルな ToDo アプリケーションです。

## 概要

このプロジェクトは、最小限の機能を持つ ToDo アプリケーションの実装例です。タスクの追加、完了状態の切り替え、入力バリデーションなどの基本機能を提供します。

## 機能

- ✅ **タスク追加**: テキスト入力欄にタイトルを入力し、「追加」ボタンをクリックしてタスクを追加
- ✅ **完了状態の切り替え**: 各タスクのチェックボックスで完了/未完了を切り替え（完了したタスクには取り消し線が表示されます）
- ✅ **入力バリデーション**: 空文字や空白のみのタイトルは追加できず、エラーメッセージが表示されます

## 技術スタック

- **Vite**: 高速な開発環境とビルドツール
- **React 19**: UI ライブラリ
- **TypeScript**: 型安全性を提供
- **ESLint**: コード品質の維持

## プロジェクト構成

```
src/
├── types.ts          # Todo 型の定義
├── App.tsx           # メインコンポーネント（状態管理）
├── TodoInput.tsx     # タスク入力フォームコンポーネント
├── TodoList.tsx      # タスク一覧表示コンポーネント
├── App.css           # スタイル
├── index.css         # グローバルスタイル
└── main.tsx          # エントリーポイント
```

## 開発環境のセットアップ

### 必要な環境

- Node.js 18 以上
- npm または yarn

### ローカル環境での実行

1. 依存関係のインストール:

```bash
npm install
```

2. 開発サーバーの起動:

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

### GitHub Codespaces での実行

このプロジェクトは Dev Container に対応しています。GitHub Codespaces で開くと、自動的に開発環境がセットアップされます。

1. GitHub リポジトリページで「Code」→「Codespaces」→「Create codespace on main」をクリック
2. Codespace が起動したら、自動的に依存関係がインストールされます
3. ターミナルで `npm run dev` を実行

## ビルドとデプロイ

### プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### プレビュー

ビルドした内容をローカルでプレビュー:

```bash
npm run preview
```

## コード品質

### リント

```bash
npm run lint
```

### 型チェック

TypeScript のビルド時に型チェックが実行されます:

```bash
npm run build
```

## ライセンス

MIT
