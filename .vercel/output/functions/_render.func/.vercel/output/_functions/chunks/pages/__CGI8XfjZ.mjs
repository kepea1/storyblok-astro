import { storyblokInit, apiPlugin } from '@storyblok/js';
/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderComponent, f as addAttribute, u as unescapeHTML, g as renderHead, h as renderSlot } from '../astro_BH9mX5hq.mjs';
import 'kleur/colors';
import 'clsx';
import camelcase from 'camelcase';

const { storyblokApi } = storyblokInit({
            accessToken: "Zeiwye20dxwhIeQrRqS1Mgtt",
            use: [apiPlugin],
            apiOptions: undefined,
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

var P = Object.defineProperty, _ = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t, e) => (_(r, typeof t != "symbol" ? t + "" : t, e), e);
class z {
  constructor() {
    p(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), p(this, "getOptionsPage", (t, e = 25, o = 1) => ({
      ...t,
      per_page: e,
      page: o
    })), p(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), p(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), p(this, "range", (t = 0, e = t) => {
      const o = Math.abs(e - t) || 0, s = t < e ? 1 : -1;
      return this.arrayFrom(o, (a, n) => n * s + t);
    }), p(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), p(this, "flatMap", (t = [], e) => t.map(e).reduce((o, s) => [...o, ...s], [])), p(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, o = /[&<>"']/g, s = RegExp(o.source);
      return t && s.test(t) ? t.replace(o, (a) => e[a]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, o) {
    const s = [];
    for (const a in t) {
      if (!Object.prototype.hasOwnProperty.call(t, a))
        continue;
      const n = t[a], c = o ? "" : encodeURIComponent(a);
      let l;
      typeof n == "object" ? l = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : l = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), s.push(l);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us, cn, ap or ca
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", o = "api-us.storyblok.com", s = "app.storyblokchina.cn", a = "api-ap.storyblok.com", n = "api-ca.storyblok.com";
    switch (t) {
      case "us":
        return o;
      case "cn":
        return s;
      case "ap":
        return a;
      case "ca":
        return n;
      default:
        return e;
    }
  }
}
const U = function(r, t) {
  const e = {};
  for (const o in r) {
    const s = r[o];
    t.indexOf(o) > -1 && s !== null && (e[o] = s);
  }
  return e;
}, D = (r) => r === "email", B = () => ({
  singleTag: "hr"
}), q = () => ({
  tag: "blockquote"
}), F = () => ({
  tag: "ul"
}), J = (r) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: r.attrs
    }
  ]
}), K = () => ({
  singleTag: "br"
}), V = (r) => ({
  tag: `h${r.attrs.level}`
}), H = (r) => ({
  singleTag: [
    {
      tag: "img",
      attrs: U(r.attrs, ["src", "alt", "title"])
    }
  ]
}), G = () => ({
  tag: "li"
}), W = () => ({
  tag: "ol"
}), Y = () => ({
  tag: "p"
}), Q = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": r.attrs.name,
        emoji: r.attrs.emoji
      }
    }
  ]
}), X = () => ({
  tag: "b"
}), Z = () => ({
  tag: "s"
}), ee = () => ({
  tag: "u"
}), te = () => ({
  tag: "strong"
}), re = () => ({
  tag: "code"
}), oe = () => ({
  tag: "i"
}), se = (r) => {
  if (!r.attrs)
    return {
      tag: ""
    };
  const t = new z().escapeHTML, e = { ...r.attrs }, { linktype: o = "url" } = r.attrs;
  if (delete e.linktype, e.href && (e.href = t(r.attrs.href || "")), D(o) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const s in e.custom)
      e[s] = e.custom[s];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, ae = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ne = () => ({
  tag: "sub"
}), le = () => ({
  tag: "sup"
}), ie = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ce = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${r.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${r.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ue = {
  nodes: {
    horizontal_rule: B,
    blockquote: q,
    bullet_list: F,
    code_block: J,
    hard_break: K,
    heading: V,
    image: H,
    list_item: G,
    ordered_list: W,
    paragraph: Y,
    emoji: Q
  },
  marks: {
    bold: X,
    strike: Z,
    underline: ee,
    strong: te,
    code: re,
    italic: oe,
    link: se,
    styled: ae,
    subscript: ne,
    superscript: le,
    anchor: ie,
    highlight: ce,
    textStyle: ge
  }
}, pe = function(r) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, o = RegExp(e.source);
  return r && o.test(r) ? r.replace(e, (s) => t[s]) : r;
};
class fe {
  constructor(t) {
    p(this, "marks"), p(this, "nodes"), t || (t = ue), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: !1 }) {
    if (t && t.content && Array.isArray(t.content)) {
      let o = "";
      return t.content.forEach((s) => {
        o += this.renderNode(s);
      }), e.optimizeImages ? this.optimizeImages(o, e.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let o = 0, s = 0, a = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (a += `width="${e.width}" `, o = e.width), typeof e.height == "number" && e.height > 0 && (a += `height="${e.height}" `, s = e.height), (e.loading === "lazy" || e.loading === "eager") && (a += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (a += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), a.length > 0 && (t = t.replace(/<img/g, `<img ${a.trim()}`));
    const c = o > 0 || s > 0 || n.length > 0 ? `${o}x${s}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (l) => {
      var i, g;
      const f = l.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (f && f.length > 0) {
        const d = {
          srcset: (i = e.srcset) == null ? void 0 : i.map((u) => {
            if (typeof u == "number")
              return `//${f}/m/${u}x0${n} ${u}w`;
            if (typeof u == "object" && u.length === 2) {
              let b = 0, y = 0;
              return typeof u[0] == "number" && (b = u[0]), typeof u[1] == "number" && (y = u[1]), `//${f}/m/${b}x${y}${n} ${b}w`;
            }
          }).join(", "),
          sizes: (g = e.sizes) == null ? void 0 : g.map((u) => u).join(", ")
        };
        let h = "";
        return d.srcset && (h += `srcset="${d.srcset}" `), d.sizes && (h += `sizes="${d.sizes}" `), l.replace(/<img/g, `<img ${h.trim()}`);
      }
      return l;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderOpeningTag(a.tag));
    });
    const o = this.getMatchingNode(t);
    return o && o.tag && e.push(this.renderOpeningTag(o.tag)), t.content ? t.content.forEach((s) => {
      e.push(this.renderNode(s));
    }) : t.text ? e.push(pe(t.text)) : o && o.singleTag ? e.push(this.renderTag(o.singleTag, " /")) : o && o.html ? e.push(o.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), o && o.tag && e.push(this.renderClosingTag(o.tag)), t.marks && t.marks.slice(0).reverse().forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderClosingTag(a.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((o) => {
      if (o.constructor === String)
        return `<${o}${e}>`;
      {
        let s = `<${o.tag}`;
        if (o.attrs)
          for (const a in o.attrs) {
            const n = o.attrs[a];
            n !== null && (s += ` ${a}="${n}"`);
          }
        return `${s}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
const ke = (r) => {
  if (typeof r != "object" || typeof r._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": t.id + "-" + t.uid
    } : {};
  } catch {
    return {};
  }
};
let de;
const be = (r, t) => {
  r.addNode("blok", (e) => {
    let o = "";
    return e.attrs.body.forEach((s) => {
      o += t(s.component, s);
    }), {
      html: o
    };
  });
}, me = (r) => !r || !(r != null && r.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), ye = (r, t, e) => {
  let o = e || de;
  if (!o) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return me(r) ? "" : (t && (o = new fe(t.schema), t.resolver && be(o, t.resolver)), o.render(r));
};
function ve() {
  return globalThis.storyblokApiInstance || console.error("storyblokApiInstance has not been initialized correctly"), globalThis.storyblokApiInstance;
}
function Ie(r, t) {
  const e = globalThis.storyblokApiInstance.richTextResolver;
  if (!e) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return ye(r, t, e);
}

const $$Astro$d = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Page;
  const { language, blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(ke(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "language": language })}`;
  })} </main>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Page.astro", void 0);

const $$Astro$c = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Feature;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))} class="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"> <img${addAttribute(blok.image.filename, "src")}${addAttribute(blok.image.alt, "alt")} class="w-full h-48 xl:h-72 object-cover"> <div class="px-12 py-6"> <h3 class="text-2xl text-[#1d243d] font-bold"> ${blok.name} </h3> </div> </div>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Feature.astro", void 0);

const $$Astro$b = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Grid;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"> ${blok.columns?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div> </div>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Grid.astro", void 0);

const $$Astro$a = createAstro();
const $$Teaser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Teaser;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <h3 class="py-32 text-6xl text-[#50b0ae] font-bold text-center"> ${blok.headline} </h3> </div>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Teaser.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  const { blok } = Astro2.props;
  let dynamicHeroClass = blok.layout === "constrained" ? "container mx-auto" : "";
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}${addAttribute(`${dynamicHeroClass} min-h-[500px] relative flex items-end justify-center my-6 rounded-[5px] overflow-hidden`, "class")}> <div class="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"> <h1 class="text-6xl text-white font-bold mb-3"> ${blok.headline} </h1> <h2 class="text-4xl text-white font-light"> ${blok.subheadline} </h2> </div> <img${addAttribute(blok.background_image.filename, "src")}${addAttribute(blok.background_image.alt, "alt")} class="absolute top-0 left-0 z-0 w-full h-full object-cover"> </div>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Hero.astro", void 0);

const $$Astro$8 = createAstro();
const $$Config = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Config;
  return renderTemplate`${maybeRenderHead()}<div></div>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Config.astro", void 0);

//You can have the languages in an utils file so it can be reused.
let languages = ["en", "es"];
function getTransLink(language, slug) {
  return language === "en" ? slug : `/${language}${slug}`;
}

const $$Astro$7 = createAstro();
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { language, article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="column feature bg-gray-100 rounded"> <img class="object-cover object-center w-full lg:h-48 md:h-36 rounded"${addAttribute(`${article.image.filename}/m/360x240`, "src")}${addAttribute(article.image.alt, "alt")}> <div class="p-4"> <h1 class="text-2xl font-semibold lg:text-3xl"> ${article.title} </h1> <p class="leading-relaxed text-gray-700 line-clamp-2 my-4"> ${article.teaser} </p> <a${addAttribute(getTransLink(language, `/blog/${article.slug}`), "href")} class="font-semibold text-blue-600 hover:underline" title="read more">
Read More »
</a>
Read More »
</div> </article>`;
}, "/Users/soc/stoyblok-astro/src/components/ArticleCard.astro", void 0);

const $$Astro$6 = createAstro();
const $$PopularArticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PopularArticles;
  const { language, blok } = Astro2.props;
  let articles = blok.articles;
  return renderTemplate`${maybeRenderHead()}<section class="mx-6 my-12"${spreadAttributes(ke(blok))}> <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12"> ${blok.headline} </h2> <ul class="grid grid-cols-1 gap-6 md:grid-cols-3"> ${articles?.length && articles.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "language": language, "article": article.content })} </li>`;
  })} </ul> </section>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/PopularArticles.astro", void 0);

const $$Astro$5 = createAstro();
const $$AllArticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AllArticles;
  const { blok, language } = Astro2.props;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "draft" ,
    starts_with: "blog/",
    is_startpage: false,
    language
  });
  const articles = data.stories;
  return renderTemplate`${maybeRenderHead()}<section class="mx-6 my-12"${spreadAttributes(ke(blok))}> <h1 class="text-6xl text-[#50b0ae] font-bold text-center mb-12"> ${blok.title} </h1> <ul class="grid grid-cols-1 gap-6 md:grid-cols-3"> ${articles?.length && articles.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "language": language, "article": article.content })} </li>`;
  })} </ul> </section>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/AllArticles.astro", void 0);

const $$Astro$4 = createAstro();
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Article;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.content);
  return renderTemplate`${maybeRenderHead()}<article${spreadAttributes(ke(blok))}> <img class="w-full h-[360px] lg:h-[450px] object-cover"${addAttribute(blok.image.alt, "alt")}${addAttribute(`${blok.image.filename}/m/1600x0`, "src")}> <div class="container mx-auto mb-12"> <h1 class="text-6xl text-[#50b0ae] font-bold mt-12 mb-4"> ${blok.title} </h1> <h2 class="text-2xl text-[#1d243d] font-bold mb-4"> ${blok.subtitle} </h2> <div class="prose">${unescapeHTML(renderedRichText)}</div> </div> </article>`;
}, "/Users/soc/stoyblok-astro/src/storyblok/Article.astro", void 0);

const components = {page: $$Page,feature: $$Feature,grid: $$Grid,teaser: $$Teaser,hero: $$Hero,config: $$Config,popularArticles: $$PopularArticles,allArticles: $$AllArticles,article: $$Article};

const $$Astro$3 = createAstro();
const $$StoryblokComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/soc/stoyblok-astro/node_modules/@storyblok/astro/components/StoryblokComponent.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { language, langSwitch } = Astro2.props;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories/config", {
    version: "draft",
    resolve_links: "url"
  });
  data?.story?.content?.header_menu;
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-24 bg-[#f7f6fd]"> <div class="container h-full mx-auto flex items-center justify-between"> <a${addAttribute(getTransLink(language, "/"), "href")}> <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Astro</h1> </a> <nav class="flex space-x-8 text-lg font-bold"> <a${addAttribute(getTransLink(language, "/blog"), "href")} class="hover:text-[#50b0ae]">Blog</a> <a${addAttribute(getTransLink(language, "/about"), "href")} class="hover:text-[#50b0ae]">About</a> ${languages.map((lang) => renderTemplate`<a${addAttribute(`lang-toggle hover:bg-gray-200 px-2 ${lang === language ? "bg-gray-200" : ""}`, "class")}${addAttribute(langSwitch[lang], "href")}> ${lang} </a>`)} </nav> </div> </header>`;
}, "/Users/soc/stoyblok-astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { language, langSwitch } = Astro2.props;
  return renderTemplate`<!-- this is the layout for the entire site
atm it has the Header component and a slot for the page content, the Header component will be included in every page
The slot will be replaced with the content of the page
the slug of the page will be used to fetch the content from Storyblok --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>@storyblok/astro</title>${renderHead()}</head> <body class="container mx-auto"> ${renderComponent($$result, "Header", $$Header, { "langSwitch": langSwitch, "language": language })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/soc/stoyblok-astro/src/layouts/BaseLayout.astro", void 0);

function parseUrl(url) {
  //converting the current url to an array based on '/'
  let urlToArray = url?.split("/");
  //Setting the fallback language to be english
  let defaultLang = "en";
  //Checking if current url contains a known language
  let isKnownLang = languages.some((l) => l === urlToArray?.[0]);
  //setting current language based on above
  let currentLang = url && isKnownLang ? urlToArray[0] : defaultLang;
  // removing language from the url and only keeping the slug
  let slug = url
    ? isKnownLang
      ? urlToArray?.slice(1)?.join("/") || undefined
      : urlToArray?.join("/")
    : undefined;

  //Same logic for generating the lang switch as we have in getStaticPaths
  let langSwitch = {};
  languages.forEach((lang) => {
    langSwitch = {
      ...langSwitch,
      [lang]: lang === "en" ? `/${slug ?? ""}` : `/${lang}/${slug ?? ""}`,
    };
  });
  //finally returning the same three variables we also get from getStaticPaths
  return { language: currentLang, slug, langSwitch };
}

async function generateStaticPaths() {
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft" 
  });
  let links = data.links;
  links = Object.values(links);
  let paths = [];
  links.forEach((link) => {
    languages.forEach((language) => {
      let slug = link.slug === "home" ? void 0 : link.slug;
      let full_url = language === "en" ? slug : `${language}/${slug ?? ""}`;
      let langSwitch = {};
      languages.forEach((lang) => {
        langSwitch = {
          ...langSwitch,
          [lang]: lang === "en" ? `/${slug ?? ""}` : `/${lang}/${slug ?? ""}`
        };
      });
      paths.push({
        props: { language, slug, langSwitch },
        params: {
          slug: full_url
        }
      });
    });
  });
  return paths;
}

const $$Astro = createAstro();
async function getStaticPaths() {
  return await generateStaticPaths();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  let props = parseUrl(params?.slug) ;
  const { slug, language, langSwitch } = props;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug === void 0 ? "home" : slug}`,
    {
      version: "draft" ,
      resolve_relations: ["popular-articles.articles"],
      language
    }
  );
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "langSwitch": langSwitch, "language": language }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "language": language, "blok": story.content })} ` })} <!-- ---
// This is the Astro component that will be used to render the page its (normally called index.astro)
// it uses the storyblok API to fetch the content of the page and then renders it using the StoryblokComponent
// The file is called [slug].astro because the slug is dynamic and will be used to fetch the content of the page and is renderd to the slot in BaseLayout.astro

import { useStoryblokApi } from "@storyblok/astro";
import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";
import BaseLayout from "../layouts/BaseLayout.astro";

export async function getStaticPaths() {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
    resolve_relations: ["popular-articles.articles"],
  });
  let links = data.links;
  links = Object.values(links);

  return links.map((link) => {
    return {
      params: {
        slug: link.slug === "home" ? undefined : link.slug,
      },
    };
  });
}

const { slug } = Astro.params;

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(
  \`cdn/stories/\${slug === undefined ? "home" : slug}\`,
  {
    version: "draft",
  }
);

const story = data.story;
---
  the StoryblokComponent is rendered to the slot in BaseLayout.astro
--> <!-- <BaseLayout>
  <StoryblokComponent blok={story.content} />
</BaseLayout> -->`;
}, "/Users/soc/stoyblok-astro/src/pages/[...slug].astro", void 0);

const $$file = "/Users/soc/stoyblok-astro/src/pages/[...slug].astro";
const $$url = "/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
