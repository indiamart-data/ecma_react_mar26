# ecma_react_mar26

A **training-style, day-wise repository** for learning modern JavaScript + React. Each day introduces new concepts and contains its own independent mini-project(s) with separate `package.json` files.

---

## Top-level structure

```
ecma_react_mar26/
├── day1/          # JS fundamentals + Babel/Webpack setup basics
├── day2/          # ECMAScript demos (datatypes, modules, functions, objects, async)
├── day3/          # First React setups
├── day4/          # React events/forms/state communication patterns
├── day5/          # React CRUD-style exercises and reusable components
├── day6/          # AJAX/HOC, React Router app + Express backend
├── day7/          # Redux Toolkit-based React app
└── notes/         # PDFs and reference docs (JS/React questions, operator notes, etc.)
```

---

## Day-by-day breakdown

### Day 1 — JS Toolchain Basics
| Folder | Description |
|---|---|
| `1_without_compilation` | Plain JS demo, no build step |
| `2_with_compilation` | Babel-only setup (`babel src --out-dir dist`) |
| `3_webpack_build` | Full Webpack 5 + Babel bundling with dev-server |

### Day 2 — ECMAScript Demos
| Folder | Description |
|---|---|
| `1_ecma_demos/src/1_datatypes` | `var`/`let`/`const`, Symbols |
| `1_ecma_demos/src/2_modules` | ES module `export`/`import` |
| `1_ecma_demos/src/3_functions` | Arrow fns, rest/spread, closures, HOFs, currying |
| `1_ecma_demos/src/4_object` | Custom types, prototypes, classes, inheritance |
| `1_ecma_demos/src/5_async` | Fetch API, Promises, async/await demos |

### Day 3 — First React Apps
| Folder | Description |
|---|---|
| `first_app` | CRA-like app with custom Webpack config (ejected-style) |
| `react_core_app` | CRA app covering hello/multi-components, styles, state, props, prop-types, component methods |

### Day 4 — Component Communication
- `react_core_app` — parent-child communication, reducers, sibling communication via parent, Context API

### Day 5 — Events, Forms & CRUD
- `react_core_app` — React events, controlled vs. uncontrolled inputs, working with arrays, CRUD assignment with `ErrorBoundary`

### Day 6 — AJAX, Routing & Auth
| Folder | Description |
|---|---|
| `react_core_app` | HOC demo, AJAX with `fetch`, HOC error boundary |
| `react-routing/react_routing_app` | React Router v6 app with lazy loading, route guards, Context-based state, login/admin pages |
| `react-routing/node-api-server` | Express + json-server backend with JWT authentication |

### Day 7 — Redux Toolkit
- `react_redux_app` — Full SPA with Redux Toolkit (`createSlice`, `createAsyncThunk`), React Router v6, react-hook-form + Zod validation, and fetch-intercept for global HTTP handling

---

## Key technologies

| Technology | Used in |
|---|---|
| JavaScript (ES6+) | All days |
| React 18 / React 19 | Day 3 → Day 7 |
| React Router v6 | Day 6, Day 7 |
| Redux Toolkit + react-redux | Day 7 |
| Bootstrap 5 + bootstrap-icons | Day 3 → Day 7 |
| react-hook-form + Zod | Day 6, Day 7 |
| fetch-intercept | Day 6, Day 7 |
| Node.js / Express | Day 6 backend |
| json-server | Day 6 backend |
| jsonwebtoken (JWT) | Day 6 backend |
| Babel | Day 1 → Day 3 |
| Webpack 5 | Day 1 → Day 3 |
| Create React App (react-scripts) | Day 3 → Day 7 |

---

## Code organisation (Day 6 & Day 7 apps)

```
src/
├── components/          # UI components grouped by domain
│   ├── common/          # ErrorBoundary, LoaderAnimation, TextInput, DataTable, etc.
│   ├── products/        # Products list, form, manage product
│   ├── counter/         # Counter + sibling components
│   ├── login/           # Login form (react-hook-form + Zod)
│   ├── bs_nav/          # Bootstrap navigation bar
│   └── root/            # RootComponent — app shell, Router, fetch interceptor
├── routes/              # Route definitions (React Router v6, lazy-loaded)
├── services/            # API client modules (fetch wrappers)
├── store/               # Redux store configuration          (Day 7)
├── features/            # Redux slices (counterSlice, productsSlice) (Day 7)
├── contexts/            # React Context providers             (Day 6)
└── hooks/               # Custom React hooks                 (Day 7)
```

---

## Progressive learning path

1. **Day 1 → Day 2** — JS language features and build tooling
2. **Day 3** — React fundamentals: components, JSX, props, state
3. **Day 4** — Component communication: parent-child, reducers, Context API
4. **Day 5** — Events, controlled forms, CRUD UI patterns
5. **Day 6** — Side effects, AJAX, React Router, authentication
6. **Day 7** — Global state management with Redux Toolkit

---

## Running a subproject

Each folder with a `package.json` is a self-contained project. Install dependencies and start the dev server:

```bash
# e.g. Day 7 Redux app
cd day7/react_redux_app
npm install
npm start          # http://localhost:3000

# Day 6 backend API server
cd day6/react-routing/node-api-server
npm install
npm start          # http://localhost:8000

# Day 1/2 Webpack demos
cd day1/3_webpack_build
npm install
npm start          # webpack-dev-server
```
