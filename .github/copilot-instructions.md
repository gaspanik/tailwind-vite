# Copilot Instructions

## プロジェクト概要

React 19 + TypeScript + Vite 7 + Tailwind CSS 4 の最小構成スターター。pnpm ワークスペース対応。

## 技術スタック

- **フレームワーク**: React 19.2（`react-jsx` transform）
- **ビルド**: Vite 7 + `@vitejs/plugin-react`（Fast Refresh 有効）
- **スタイル**: Tailwind CSS 4（`@tailwindcss/vite` 経由、`@import "tailwindcss"` で適用）
- **Linter/Formatter**: Biome 2.3（`.biome.json` で厳格設定）
- **パッケージマネージャー**: pnpm（`pnpm-workspace.yaml` で `@tailwindcss/oxide`, `esbuild` のみビルド依存）

## 重要な構造

- **エントリ**: `index.html` → `src/main.tsx` → `src/App.tsx`
- **スタイル**: `src/index.css` で `@import "tailwindcss"` のみ（設定ファイルなし、v4 の新方式）
- **TypeScript**: プロジェクト参照（`tsconfig.json` は `tsconfig.app.json` と `tsconfig.node.json` を参照）
- **Vite 設定**: `vite.config.ts` で `base: './'`（相対パス配信）

## コーディング規約

### TypeScript

- **厳格モード**: `strict: true`、未使用変数/引数エラー、`noUncheckedSideEffectImports` 有効
- **モジュール**: `moduleResolution: "bundler"`、`allowImportingTsExtensions: true`
- **JSX**: `react-jsx` transform（`import React` 不要）
- **型チェック**: `erasableSyntaxOnly: true`（型情報のみの構文に限定）

### Biome ルール

- **フォーマット**: 2 スペース、LF、80 文字幅、セミコロン `asNeeded`、シングルクォート、トレイリングコンマ `all`
- **Linter**: `recommended` ベース + TypeScript 厳格ルール（`noExplicitAny: error`、`noUnusedVariables: error`）
- **React**: `useExhaustiveDependencies: warn`、`useHookAtTopLevel: error`
- **CSS**: Tailwind ディレクティブのパース有効

## 開発ワークフロー

```fish
# 開発サーバー起動（HMR 有効）
pnpm dev

# ビルド（型チェック → Vite ビルド）
pnpm build

# ビルド成果物のプレビュー
pnpm preview

# コード品質チェック（Biome のフォーマット + lint）
pnpm check
```

### Mise タスク（推奨）

`mise.toml` で定義されたタスクを `mise run <task>` で実行可能：

- `vite:dev` / `vite:build` / `vite:preview`
- `biome:format` / `biome:lint` / `biome:check`（確認プロンプトあり）

## 依存関係管理

- **ロックファイル**: `pnpm-lock.yaml`（pnpm v9+ の新形式）
- **更新**: `ncu -i -u` でインタラクティブ更新（履歴より）

## Tailwind CSS v4 の注意点

- **設定不要**: `tailwind.config.js` なし、`src/index.css` に `@import "tailwindcss"` で完結
- **カスタマイズ**: CSS 変数や `@theme` ディレクティブで設定（従来の JS 設定ではない）
- **Vite プラグイン**: `@tailwindcss/vite` が必須（PostCSS 不要）

## コンポーネント作成時のパターン

```tsx
// lucide-react アイコン使用例（src/App.tsx 参照）
import { IconName } from 'lucide-react'

function Component() {
  return (
    <div className="flex items-center gap-2">
      <IconName className="w-6 h-6" />
      <h1 className="text-2xl font-bold">Title</h1>
    </div>
  )
}
```

- **CSS クラス**: Tailwind ユーティリティ優先
- **型安全**: `App.css` などのローカル CSS も併用可（`import './App.css'`）

## トラブルシューティング

- **Biome LSP エラー**: VSCode を再読み込み（`Developer: Reload Window`）、ワークスペース信頼確認
- **HMR 停止**: `pnpm dev` 再起動、`node_modules/.vite` キャッシュ削除
- **型エラー**: `pnpm build` で事前チェック（`tsc -b` → `vite build`）
