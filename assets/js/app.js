const sampleScreenshot = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" fill="none">
  <rect width="1280" height="720" rx="32" fill="#0E1220"/>
  <rect x="56" y="56" width="1168" height="68" rx="20" fill="#151B2E"/>
  <rect x="88" y="82" width="140" height="16" rx="8" fill="#6F5BFF"/>
  <rect x="260" y="82" width="84" height="16" rx="8" fill="#29314F"/>
  <rect x="376" y="82" width="84" height="16" rx="8" fill="#29314F"/>
  <rect x="56" y="164" width="330" height="500" rx="28" fill="#12182B"/>
  <rect x="420" y="164" width="804" height="500" rx="28" fill="#111625"/>
  <rect x="92" y="208" width="190" height="18" rx="9" fill="#F3F4FF"/>
  <rect x="92" y="252" width="250" height="14" rx="7" fill="#3D4666"/>
  <rect x="452" y="208" width="420" height="26" rx="13" fill="#F3F4FF"/>
  <rect x="452" y="258" width="620" height="14" rx="7" fill="#3D4666"/>
  <rect x="452" y="288" width="520" height="14" rx="7" fill="#3D4666"/>
  <rect x="452" y="344" width="350" height="220" rx="22" fill="#171E34"/>
  <rect x="828" y="344" width="364" height="220" rx="22" fill="#171E34"/>
</svg>
`)}`;

const docs = {
  introduction: {
    kicker: "Getting Started",
    title: "Introduction",
    intro: "This is a secondary page preview. As evident, content is displayed on this type of page.",
    sections: [
      {
        id: "what-is-javascript",
        title: "What is JavaScript?",
        body: [
          "JavaScript is a high-level, interpreted programming language primarily used for creating interactive web applications. It is a core technology of the web, alongside HTML and CSS, enabling dynamic content updates, user interactions, and complex functionality within web pages.",
          "Originally developed in 1995 by Brendan Eich at Netscape, JavaScript has evolved significantly and is now widely used for both client-side and server-side development.",
          {
            text: "Этот абзац добавлен как пример русского текста на внутренней странице, чтобы можно было сразу увидеть отдельный шрифт для кириллицы в обычном контенте документации.",
            lang: "ru"
          }
        ]
      },
      {
        id: "key-features",
        title: "Key Features of JavaScript",
        bullets: [
          "Interpreted and Dynamic. JavaScript executes in real time without a separate compilation step.",
          "Multi-Paradigm. The language supports procedural, object-oriented, and functional styles.",
          "Event-Driven. It handles user interactions and system events efficiently.",
          "Asynchronous Capabilities. Promises and async or await let the runtime manage concurrent tasks.",
          "Runs in Browser and Server environments, including Node.js."
        ]
      },
      {
        id: "why-use-javascript",
        title: "Why Use JavaScript?",
        body: [
          "JavaScript is the default language for rich interfaces on the web. It gives teams one language across frontend, backend, desktop tooling, and serverless functions.",
          "That combination makes it practical for documentation platforms, admin panels, dashboards, and content-driven applications where quick iteration matters."
        ]
      },
      {
        id: "javascript-in-action",
        title: "JavaScript in Action",
        body: [
          "A typical docs platform uses JavaScript for client-side routing, section search, theme switching, keyboard shortcuts, and changelog interactions.",
          "Modern JavaScript also powers build systems, API integrations, and headless CMS workflows that keep technical content maintainable."
        ]
      }
    ]
  },
  syntax: {
    kicker: "Getting Started",
    title: "Syntax and Structure",
    intro: "Learn the building blocks of JavaScript syntax, declaration patterns, and file organization.",
    sections: [
      {
        id: "variables",
        title: "Variables and Declarations",
        body: [
          "Use const by default, let when reassignment is required, and avoid var in modern codebases.",
          "Clear naming and small scopes make documentation examples easier to scan and less error-prone."
        ]
      },
      {
        id: "statements",
        title: "Statements and Expressions",
        body: [
          "JavaScript distinguishes between statements like if or for, and expressions that resolve to values.",
          "Understanding that difference helps when composing concise rendering logic and utility functions."
        ]
      }
    ]
  },
  "control-flow": {
    kicker: "Getting Started",
    title: "Control Flow",
    intro: "Conditionals and loops shape how your program reacts to state, input, and events.",
    sections: [
      {
        id: "conditionals",
        title: "Conditionals",
        body: [
          "Use if, else if, and switch when behavior depends on data shape or feature state.",
          "Keep branches shallow where possible to avoid making business logic hard to follow."
        ]
      },
      {
        id: "loops",
        title: "Loops",
        body: [
          "for...of is often the cleanest option for iterating arrays or iterable collections.",
          "Array methods like map, filter, and reduce are better for transformation pipelines."
        ]
      }
    ]
  },
  functions: {
    kicker: "Getting Started",
    title: "Functions",
    intro: "Functions package behavior into reusable units and define the shape of your public API.",
    sections: [
      {
        id: "declarations",
        title: "Declarations vs Expressions",
        body: [
          "Function declarations are hoisted, while function expressions are evaluated in place.",
          "Arrow functions are concise, but they also preserve lexical this, which changes behavior."
        ]
      },
      {
        id: "parameters",
        title: "Parameters and Return Values",
        body: [
          "Prefer explicit parameters and return values over hidden shared state.",
          "That keeps examples stable and makes code samples easier to document."
        ]
      }
    ]
  },
  "objects-arrays": {
    kicker: "Getting Started",
    title: "Objects and Arrays",
    intro: "Structured data is at the center of application state, APIs, and rendering pipelines.",
    sections: [
      {
        id: "object-basics",
        title: "Object Basics",
        body: [
          "Objects group related values under named keys. They are commonly used for configuration, payloads, and UI state.",
          "Destructuring can reduce repetition, but overuse may hide intent in beginner-facing examples."
        ]
      },
      {
        id: "array-patterns",
        title: "Array Patterns",
        body: [
          "Arrays are ordered collections and work well with iteration helpers.",
          "Methods like find, some, and every make intent clearer than manual index loops."
        ]
      }
    ]
  },
  es6: {
    kicker: "Getting Started",
    title: "ES6+ Features",
    intro: "Modern JavaScript introduced syntax that makes code shorter, safer, and more expressive.",
    sections: [
      {
        id: "destructuring",
        title: "Destructuring and Spread",
        body: [
          "Destructuring extracts values from objects and arrays into local variables.",
          "Spread syntax is useful for creating copies and merging data, especially in immutable state updates."
        ]
      },
      {
        id: "template-literals",
        title: "Template Literals",
        body: [
          "Template literals improve string composition and make multiline examples more readable.",
          "They are also the default choice when interpolating dynamic values into UI copy."
        ]
      }
    ]
  },
  async: {
    kicker: "Advanced",
    title: "Asynchronous JavaScript",
    intro: "Async control flow is essential for APIs, loading states, background work, and resilient UI updates.",
    sections: [
      {
        id: "promises",
        title: "Promises",
        body: [
          "Promises model values that resolve in the future and provide a consistent abstraction for async operations.",
          "They work well for fetch requests, deferred rendering, and stateful workflows."
        ]
      },
      {
        id: "async-await",
        title: "Async and Await",
        body: [
          "async and await make asynchronous code read more like synchronous logic.",
          "Use try and catch around awaited calls when failures need dedicated recovery paths."
        ]
      }
    ]
  },
  modules: {
    kicker: "Advanced",
    title: "Modules and Imports",
    intro: "Modules define ownership boundaries and keep larger codebases maintainable.",
    sections: [
      {
        id: "exports",
        title: "Exports",
        body: [
          "Named exports make APIs explicit and reduce ambiguity in shared utility libraries.",
          "Default exports are useful when a file has one clear primary responsibility."
        ]
      },
      {
        id: "organization",
        title: "Organization",
        body: [
          "Group modules by product area rather than by file type when features are large enough.",
          "That aligns better with docs navigation and changelog ownership."
        ]
      }
    ]
  },
  dom: {
    kicker: "Browser",
    title: "DOM Manipulation",
    intro: "The DOM is the interface between your code and the rendered document.",
    sections: [
      {
        id: "selectors",
        title: "Selecting Elements",
        body: [
          "Use querySelector and querySelectorAll for expressive DOM lookups.",
          "Stable data attributes are safer than styling classes when JavaScript depends on selectors."
        ]
      },
      {
        id: "updates",
        title: "Updating Content",
        body: [
          "Prefer focused DOM updates over full rerenders when you are working without a framework.",
          "That keeps simple documentation UIs fast and understandable."
        ]
      }
    ]
  },
  events: {
    kicker: "Browser",
    title: "Event Handling",
    intro: "Events connect user actions to application logic.",
    sections: [
      {
        id: "listeners",
        title: "Event Listeners",
        body: [
          "Attach listeners close to where the interaction is owned, or use delegation when many similar elements are involved.",
          "Small handler functions are easier to test and reason about."
        ]
      },
      {
        id: "keyboard",
        title: "Keyboard Support",
        body: [
          "Keyboard interactions matter for documentation sites with search and deep navigation.",
          "Shortcuts should be discoverable and should not block native browser behavior unnecessarily."
        ]
      }
    ]
  },
  forms: {
    kicker: "Browser",
    title: "Forms and Input Handling",
    intro: "Forms are often the first point where validation, accessibility, and state synchronization intersect.",
    sections: [
      {
        id: "validation",
        title: "Validation",
        body: [
          "Validate early in the UI, but keep authoritative checks on the server for anything important.",
          "Error messages should explain what failed and how to fix it."
        ]
      },
      {
        id: "controlled-inputs",
        title: "Input State",
        body: [
          "Controlled inputs give full visibility into state changes, while uncontrolled inputs can be simpler for small forms.",
          "Choose based on complexity, not habit."
        ]
      }
    ]
  },
  "web-api": {
    kicker: "Backend and Frameworks",
    title: "Web API",
    intro: "Modern JavaScript backends depend on clear HTTP boundaries, predictable schemas, and robust error handling.",
    sections: [
      {
        id: "http-basics",
        title: "HTTP Basics",
        body: [
          "Request methods, status codes, and headers define the contract between client and server.",
          "Good documentation explains both expected success cases and failure modes."
        ]
      },
      {
        id: "api-design",
        title: "API Design",
        body: [
          "Consistent naming and stable response envelopes make APIs easier to integrate and easier to document.",
          "Versioning decisions should be intentional rather than reactive."
        ]
      }
    ]
  },
  performance: {
    kicker: "Backend and Frameworks",
    title: "Compatibility and Performance",
    intro: "Performance is part of product quality, especially in content-heavy interfaces.",
    sections: [
      {
        id: "compatibility",
        title: "Compatibility",
        body: [
          "Browser compatibility starts with knowing your audience and testing real platform constraints.",
          "Progressive enhancement lets core reading flows work even when advanced features are unavailable."
        ]
      },
      {
        id: "optimization",
        title: "Optimization",
        body: [
          "Trim render work, avoid unnecessary layout shifts, and prioritize the first meaningful content on screen.",
          "Documentation sites benefit from static rendering, compressed assets, and restrained interaction layers."
        ]
      }
    ]
  },
  "ui-code": {
    kicker: "UI",
    title: "Code and Inline",
    intro: "Reusable building blocks for code-heavy documentation pages.",
    sections: [
      {
        id: "code-block",
        title: "Code Block",
        blocks: [
          {
            type: "code",
            file: "app/routes/docs.tsx",
            lang: "TypeScript",
            code: `export async function loader() {\n  const articles = await db.docs.findMany({\n    orderBy: { updatedAt: "desc" }\n  });\n\n  return json({ articles });\n}`
          },
          {
            type: "note",
            tone: "info",
            title: "Inline code",
            text: 'Use inline code like `npm run build`, `props.variant`, or `/api/docs` for short references.'
          }
        ]
      }
    ]
  },
  "ui-callouts": {
    kicker: "UI",
    title: "Callouts and Badges",
    intro: "Feedback patterns for status, warnings, deprecations and release markers.",
    sections: [
      {
        id: "callouts",
        title: "Callout Variants",
        blocks: [
          { type: "callout", tone: "info", title: "Info", text: "Use for neutral guidance and context around a section." },
          { type: "callout", tone: "success", title: "Success", text: "Use after a completed step or valid configuration." },
          { type: "callout", tone: "warning", title: "Warning", text: "Use when a setup choice may break compatibility or data." },
          { type: "callout", tone: "error", title: "Error", text: "Use for required fixes before the reader can proceed." },
          { type: "callout", tone: "tip", title: "Tip", text: "Use for workflow shortcuts, hidden features or productivity hints." },
          { type: "badges", items: ["New", "Beta", "Stable", "Updated", "Deprecated"] }
        ]
      }
    ]
  },
  "ui-navigation": {
    kicker: "UI",
    title: "Tabs and Steps",
    intro: "Pattern library for multi-option examples and procedural onboarding flows.",
    sections: [
      {
        id: "tabs",
        title: "Tabs",
        blocks: [
          {
            type: "tabs",
            items: [
              { label: "JavaScript", content: "<pre><code>fetch('/api/docs').then((r) => r.json());</code></pre>" },
              { label: "TypeScript", content: "<pre><code>const data = await fetch('/api/docs').then((r) => r.json() as Promise&lt;DocsResponse&gt;);</code></pre>" },
              { label: "cURL", content: "<pre><code>curl https://example.com/api/docs</code></pre>" }
            ]
          },
          {
            type: "steps",
            items: [
              "Install project dependencies and verify your local environment.",
              "Add the docs route, page metadata and markdown source mapping.",
              "Publish a preview and validate keyboard navigation and search."
            ]
          }
        ]
      }
    ]
  },
  "ui-api": {
    kicker: "UI",
    title: "API and Tables",
    intro: "Common API reference components for endpoint docs, params, and example payloads.",
    sections: [
      {
        id: "endpoint",
        title: "Endpoint Block",
        blocks: [
          {
            type: "endpoint",
            method: "GET",
            path: "/api/v1/articles/:slug",
            summary: "Returns one documentation article with rendered content and metadata."
          },
          {
            type: "table",
            columns: ["Name", "Type", "Required", "Default", "Description"],
            rows: [
              ["slug", "string", "Yes", "—", "Unique article identifier used in routing."],
              ["includeToc", "boolean", "No", "false", "Include generated table of contents."],
              ["locale", "string", "No", '"en"', "Response locale for translated content."]
            ]
          },
          {
            type: "response",
            title: "Response example",
            code: `{\n  "slug": "introduction",\n  "title": "Introduction",\n  "updatedAt": "2026-03-24T10:15:00Z",\n  "toc": ["What is JavaScript?", "Key Features"]\n}`
          }
        ]
      }
    ]
  },
  "ui-content": {
    kicker: "UI",
    title: "Content and Media",
    intro: "Blocks for editorial comparisons, previews and screenshots inside docs pages.",
    sections: [
      {
        id: "comparison",
        title: "Comparison and Preview",
        blocks: [
          {
            type: "do-dont",
            doTitle: "Do",
            doText: "Show one focused example per concept and explain the tradeoff briefly.",
            dontTitle: "Don’t",
            dontText: "Dump long unstructured snippets without context or expected output."
          },
          {
            type: "preview",
            title: "Preview Card",
            text: "Use preview blocks when you need to show a UI sample, empty state or card layout before explaining implementation details."
          },
          {
            type: "image",
            src: sampleScreenshot,
            alt: "Documentation screenshot example",
            caption: "Click the screenshot to open a larger preview."
          }
        ]
      }
    ]
  },
  "ui-feedback": {
    kicker: "UI",
    title: "FAQ and States",
    intro: "Utility blocks for support content, edge cases and second-level explanations.",
    sections: [
      {
        id: "faq",
        title: "FAQ, Expandables and States",
        blocks: [
          {
            type: "accordion",
            items: [
              { title: "Can I mix markdown pages and custom UI blocks?", content: "Yes. Use markdown for content-first pages and custom blocks for API-heavy or product-heavy docs." },
              { title: "When should I use tabs?", content: "Use tabs when the same concept needs multiple code examples or platform variants." }
            ]
          },
          {
            type: "checklist",
            items: [
              "Search is keyboard accessible.",
              "Code examples include copy actions.",
              "Every page has a clear next step."
            ]
          },
          {
            type: "search-results",
            items: [
              { title: "API table", meta: "UI / API and Tables", excerpt: "Parameter docs with required, default and description columns." },
              { title: "Code Block", meta: "UI / Code and Inline", excerpt: "Syntax-highlighted examples with file label and copy button." }
            ]
          },
          {
            type: "empty-state",
            title: "No matching components",
            text: "Try another keyword or browse the UI category list from the sidebar."
          }
        ]
      }
    ]
  }
};

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const sideLinks = document.querySelectorAll(".side-link");
const pageLinks = document.querySelectorAll(".side-link-page");
const sideGroups = document.querySelectorAll(".side-group");
const routeButtons = document.querySelectorAll("[data-route]");
const docArticle = document.getElementById("docArticle");
const tocNav = document.getElementById("tocNav");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const topbar = document.querySelector(".topbar");
const footerYear = document.getElementById("footerYear");
const docOrder = [...sideLinks].map((link) => link.dataset.doc);
const imageLightbox = document.getElementById("imageLightbox");
const imageLightboxImg = document.getElementById("imageLightboxImg");
const imageLightboxClose = document.getElementById("imageLightboxClose");
const menuToggle = document.getElementById("menuToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");

let currentDoc = "introduction";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function highlightCode(code, lang = "") {
  let html = escapeHtml(code);

  if (/json/i.test(lang)) {
    html = html
      .replace(/(&quot;.*?&quot;)(\s*:)/g, '<span class="token token-key">$1</span>$2')
      .replace(/:\s*(&quot;.*?&quot;)/g, ': <span class="token token-string">$1</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="token token-keyword">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="token token-number">$1</span>');
    return html;
  }

  html = html
    .replace(/(\/\/.*)$/gm, '<span class="token token-comment">$1</span>')
    .replace(/(&quot;.*?&quot;|'.*?'|`[\s\S]*?`)/g, '<span class="token token-string">$1</span>')
    .replace(/\b(const|let|var|return|async|await|function|export|import|from|if|else|try|catch|new)\b/g, '<span class="token token-keyword">$1</span>')
    .replace(/\b(json|fetch|findMany|loader|Promise)\b/g, '<span class="token token-function">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="token token-number">$1</span>');

  return html;
}

function renderBlock(block) {
  switch (block.type) {
    case "code":
      return `
        <div class="ui-code-block">
          <div class="ui-code-head">
            <div>
              <span class="ui-code-file">${block.file}</span>
              <span class="ui-code-lang">${block.lang}</span>
            </div>
            <button class="ui-copy-button" type="button" data-copy="${escapeHtml(block.code)}">Copy</button>
          </div>
          <pre><code>${highlightCode(block.code, block.lang)}</code></pre>
        </div>
      `;
    case "note":
    case "callout":
      return `
        <div class="ui-callout ui-callout-${block.tone}">
          <strong>${block.title}</strong>
          <p>${block.text}</p>
        </div>
      `;
    case "badges":
      return `<div class="ui-badges">${block.items.map((item) => `<span class="badge-${item.toLowerCase()}">${item}</span>`).join("")}</div>`;
    case "tabs":
      return `
        <div class="ui-tabs" data-tabs>
          <div class="ui-tabs-nav">
            ${block.items.map((item, index) => `<button class="ui-tab-trigger${index === 0 ? " is-active" : ""}" type="button" data-tab="${index}">${item.label}</button>`).join("")}
          </div>
          ${block.items.map((item, index) => `<div class="ui-tab-panel${index === 0 ? " is-active" : ""}" data-tab-panel="${index}">${item.content}</div>`).join("")}
        </div>
      `;
    case "steps":
      return `<ol class="ui-steps">${block.items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
    case "endpoint":
      return `
        <div class="ui-endpoint">
          <span class="ui-endpoint-method">${block.method}</span>
          <code>${block.path}</code>
          <p>${block.summary}</p>
        </div>
      `;
    case "table":
      return `
        <div class="ui-table-wrap">
          <table class="ui-table">
            <thead><tr>${block.columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
            <tbody>
              ${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      `;
    case "response":
      return `
        <div class="ui-code-block ui-response-block">
          <div class="ui-code-head">
            <span class="ui-code-file">${block.title}</span>
            <span class="ui-code-lang">JSON</span>
          </div>
          <pre><code>${highlightCode(block.code, "json")}</code></pre>
        </div>
      `;
    case "do-dont":
      return `
        <div class="ui-compare">
          <div class="ui-compare-card is-do">
            <span>${block.doTitle}</span>
            <p>${block.doText}</p>
          </div>
          <div class="ui-compare-card is-dont">
            <span>${block.dontTitle}</span>
            <p>${block.dontText}</p>
          </div>
        </div>
      `;
    case "preview":
      return `
        <div class="ui-preview-card">
          <strong>${block.title}</strong>
          <p>${block.text}</p>
        </div>
      `;
    case "image":
      return `
        <figure class="ui-image-card">
          <button class="ui-image-button" type="button" data-image-src="${block.src}" data-image-alt="${block.alt}">
            <img class="zoomable-image" src="${block.src}" alt="${block.alt}">
          </button>
          <figcaption>${block.caption}</figcaption>
        </figure>
      `;
    case "accordion":
      return `
        <div class="ui-accordion">
          ${block.items.map((item) => `
            <details class="ui-accordion-item">
              <summary>${item.title}</summary>
              <p>${item.content}</p>
            </details>
          `).join("")}
        </div>
      `;
    case "checklist":
      return `<ul class="ui-checklist">${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    case "search-results":
      return `
        <div class="ui-search-results">
          ${block.items.map((item) => `
            <article class="ui-search-item">
              <strong>${item.title}</strong>
              <span>${item.meta}</span>
              <p>${item.excerpt}</p>
            </article>
          `).join("")}
        </div>
      `;
    case "empty-state":
      return `
        <div class="ui-empty-state">
          <strong>${block.title}</strong>
          <p>${block.text}</p>
        </div>
      `;
    default:
      return "";
  }
}

function renderDoc(docKey) {
  const doc = docs[docKey];
  if (!doc) return;

  currentDoc = docKey;
  const docIndex = docOrder.indexOf(docKey);
  const prevKey = docIndex > 0 ? docOrder[docIndex - 1] : null;
  const nextKey = docIndex < docOrder.length - 1 ? docOrder[docIndex + 1] : null;
  const pagerHtml = prevKey || nextKey
    ? `
      <nav class="doc-pager" aria-label="Page navigation">
        ${prevKey
          ? `<a href="#" class="doc-pager-card" data-route="doc" data-doc-target="${prevKey}">
              <span class="doc-pager-label">Previous</span>
              <span class="doc-pager-title">${docs[prevKey].title}</span>
            </a>`
          : `<span></span>`}
        ${nextKey
          ? `<a href="#" class="doc-pager-card is-next" data-route="doc" data-doc-target="${nextKey}">
              <span class="doc-pager-label">Next</span>
              <span class="doc-pager-title">${docs[nextKey].title}</span>
            </a>`
          : `<span></span>`}
      </nav>
    `
    : "";

  docArticle.innerHTML = `
    <p class="doc-kicker">${doc.kicker}</p>
    <h1 class="doc-title">${doc.title}</h1>
    <p class="doc-intro">${doc.intro}</p>
    ${doc.sections
      .map((section) => {
        const paragraphs = (section.body || [])
          .map((item) => {
            if (typeof item === "string") {
              return `<p>${item}</p>`;
            }
            const langAttr = item.lang ? ` lang="${item.lang}"` : "";
            return `<p${langAttr}>${item.text}</p>`;
          })
          .join("");
        const bullets = section.bullets
          ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
          : "";
        const blocks = section.blocks
          ? `<div class="ui-block-stack">${section.blocks.map((block) => renderBlock(block)).join("")}</div>`
          : "";
        return `
          <section class="doc-section" id="${section.id}">
            <h2>${section.title}</h2>
            ${paragraphs}
            ${bullets}
            ${blocks}
          </section>
        `;
      })
      .join("")}
    ${pagerHtml}
  `;

  tocNav.innerHTML = doc.sections
    .map((section, index) => `<a href="#${section.id}" class="${index === 0 ? "is-active" : ""}">${section.title}</a>`)
    .join("");

  sideLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.doc === docKey);
  });

  requestAnimationFrame(bindTocTracking);
}

function closeSidebar() {
  document.body.classList.remove("is-sidebar-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function toggleSidebar() {
  const isOpen = document.body.classList.toggle("is-sidebar-open");
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
}

function setRoute(route, docTarget) {
  const targetPage = route === "doc" ? "doc" : route === "changelog" ? "changelog" : "home";
  document.body.dataset.page = targetPage;

  pages.forEach((page) => {
    page.classList.toggle("is-visible", page.dataset.page === targetPage);
  });

  navLinks.forEach((link) => {
    const isDocs = targetPage !== "changelog" && link.dataset.route === "home";
    const isChangelog = targetPage === "changelog" && link.dataset.route === "changelog";
    link.classList.toggle("is-active", isDocs || isChangelog);
  });

  if (targetPage === "doc") {
    renderDoc(docTarget || currentDoc);
  }

  syncHeaderState();
}

function bindTocTracking() {
  const sections = [...docArticle.querySelectorAll(".doc-section")];
  const tocLinks = [...tocNav.querySelectorAll("a")];
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setRoute(button.dataset.route, button.dataset.docTarget);
    closeSidebar();
  });
});

sideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.route === "changelog" || link.dataset.route === "home") {
      setRoute(link.dataset.route);
      closeSidebar();
      return;
    }
    setRoute("doc", link.dataset.doc);
    closeSidebar();
  });
});

document.addEventListener("click", (event) => {
  const pagerLink = event.target.closest(".doc-pager-card");
  if (!pagerLink) return;
  event.preventDefault();
  setRoute("doc", pagerLink.dataset.docTarget);
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest(".ui-copy-button");
  if (!copyButton) return;
  const text = copyButton.dataset.copy || "";
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1200);
  } catch {
    copyButton.textContent = "Failed";
  }
});

document.addEventListener("click", (event) => {
  const tabTrigger = event.target.closest(".ui-tab-trigger");
  if (!tabTrigger) return;
  const tabsRoot = tabTrigger.closest("[data-tabs]");
  if (!tabsRoot) return;
  const tabId = tabTrigger.dataset.tab;
  tabsRoot.querySelectorAll(".ui-tab-trigger").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabId);
  });
  tabsRoot.querySelectorAll(".ui-tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === tabId);
  });
});

document.addEventListener("click", (event) => {
  const imageButton = event.target.closest(".ui-image-button");
  if (!imageButton) return;
  imageLightboxImg.src = imageButton.dataset.imageSrc || "";
  imageLightboxImg.alt = imageButton.dataset.imageAlt || "";
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-lightbox-open");
});

imageLightboxClose?.addEventListener("click", () => {
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-lightbox-open");
});

imageLightbox?.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    imageLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
  }
});

menuToggle?.addEventListener("click", () => {
  toggleSidebar();
});

sidebarOverlay?.addEventListener("click", () => {
  closeSidebar();
});

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  sideGroups.forEach((group) => {
    const links = [...group.querySelectorAll(".side-link")];
    let hasVisibleLinks = false;

    links.forEach((link) => {
      const matches = link.textContent.toLowerCase().includes(query);
      const isVisible = query.length === 0 || matches;
      link.classList.toggle("is-hidden", !isVisible);
      if (isVisible) {
        hasVisibleLinks = true;
      }
    });

    group.classList.toggle("is-hidden", !hasVisibleLinks);
  });
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape") {
    closeSidebar();
  }
});

function syncHeaderState() {
  topbar.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", syncHeaderState, { passive: true });

const savedTheme = localStorage.getItem("squaredocs-theme");
if (savedTheme) {
  document.body.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  document.body.dataset.theme = nextTheme === "dark" ? "" : nextTheme;
  if (nextTheme === "dark") {
    localStorage.removeItem("squaredocs-theme");
  } else {
    localStorage.setItem("squaredocs-theme", nextTheme);
  }
});

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

renderDoc(currentDoc);
setRoute("home");
syncHeaderState();
