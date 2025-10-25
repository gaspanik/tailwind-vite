# Vite Staterter for React + TypeScript + Tailwind CSS

本プロジェクトは、React + TypeScript を Vite と Tailwind CSS で動かす最小構成。

- React 19 / React DOM 19
- TypeScript 5.9
- Vite 7
  - プラグイン: @vitejs/plugin-react 5（Fast Refresh など）
- Tailwind CSS 4
  - ビルド統合: @tailwindcss/vite 4
- Biome 2.3（フォーマッター + Linter）
- アイコン: lucide-react
- パッケージマネージャー: pnpm（ワークスペース設定あり）

## 主要ファイル

- エントリ: [src/main.tsx](src/main.tsx)
- ルートコンポーネント: [src/App.tsx](src/App.tsx)
- スタイル: [src/index.css](src/index.css)（Tailwind v4 を `@import "tailwindcss"` で適用）
- Vite 設定: [vite.config.ts](vite.config.ts)
- TypeScript 設定: [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)
- Biome 設定: [biome.json](biome.json)
- スクリプト定義: [package.json](package.json)
- pnpm ワークスペース: [pnpm-workspace.yaml](pnpm-workspace.yaml)

## 開発コマンド

- 開発サーバー: `pnpm dev`
- ビルド: `pnpm build`
- プレビュー: `pnpm preview`
- Lint/Format/Check: `pnpm lint` / `pnpm format` / `pnpm check`

## 動作要件

- Node.js >= 20.19（Vite の推奨要件）
