import { _ as __nuxt_component_0 } from './client-only.mjs';
import { resolveDirective, mergeProps, useSSRContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, c as _imports_0 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main$1 = {
  __name: "TimelineComponent",
  __ssrInlineRender: true,
  props: {
    timelineItems: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "timeline-container",
        initial: { opacity: 0, y: 50 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 800 } }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f1c90f38><div class="timeline" data-v-f1c90f38><!--[-->`);
      ssrRenderList(__props.timelineItems, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "timeline-item",
          initial: { opacity: 0, x: -50 },
          visibleOnce: { opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f1c90f38><div class="timeline-date" data-v-f1c90f38>${ssrInterpolate(_ctx.$t(`home.timeline.items.${index}.date`))}</div><div class="timeline-content" data-v-f1c90f38><h3 class="timeline-title" data-v-f1c90f38>${ssrInterpolate(_ctx.$t(`home.timeline.items.${index}.title`))}</h3><p class="timeline-desc" data-v-f1c90f38>${ssrInterpolate(_ctx.$t(`home.timeline.items.${index}.desc`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimelineComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1c90f38"]]);

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    const techStack = [
      {
        key: "vue",
        icon: "/icon/vue.png"
      },
      {
        key: "nuxt",
        icon: "/icon/nuxt.png"
      },
      {
        key: "python",
        icon: "/icon/python.ico"
      },
      {
        key: "fastapi",
        icon: "/icon/fastapi.png"
      }
    ];
    const timelineItems = Array.from({ length: 7 }, () => ({}));
    useHead({
      title: "Gudupao | Light Up The Future"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_TimelineComponent = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-container" }, _attrs))} data-v-40d7b0e7>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "logo-text-container",
        initial: { opacity: 0, y: 100 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 1e3 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7><div${ssrRenderAttrs(mergeProps({
        class: "logo-container",
        initial: { opacity: 0, scale: 0.5 },
        visibleOnce: { opacity: 1, scale: 1, transition: { duration: 800, delay: 200 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7><img${ssrRenderAttr("src", _imports_0)} alt="Gudupao Logo" class="square-logo hover-rotate" data-v-40d7b0e7></div><div${ssrRenderAttrs(mergeProps({
        class: "text-container",
        initial: { opacity: 0, x: 50 },
        visibleOnce: { opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7><h1 class="brand-name" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t("home.brandName"))}</h1><h2 class="brand-name-cn" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t("home.brandNameCn"))}</h2></div></div><div${ssrRenderAttrs(mergeProps({
        class: "tech-stack-container",
        initial: { opacity: 0, y: 50 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 800 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7><h2 class="section-title glow-text" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t("home.techStack.title"))}</h2><div class="tech-stack-grid" data-v-40d7b0e7><!--[-->`);
      ssrRenderList(techStack, (tech, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index2,
          class: "tech-card floating",
          initial: { opacity: 0, y: 50 },
          visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, delay: index2 * 200 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7><img${ssrRenderAttr("src", tech.icon)}${ssrRenderAttr("alt", tech.name)} class="tech-icon" data-v-40d7b0e7><h3 class="tech-name" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t(`home.techStack.${tech.key}.name`))}</h3><p class="tech-desc" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t(`home.techStack.${tech.key}.desc`))}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="timeline-section" data-v-40d7b0e7><h2 class="section-title glow-text" data-v-40d7b0e7>${ssrInterpolate(_ctx.$t("home.timeline.title"))}</h2><div${ssrRenderAttrs(mergeProps({
        class: "timeline-wrapper",
        initial: { opacity: 0, y: 50 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 800 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-40d7b0e7>`);
      _push(ssrRenderComponent(_component_TimelineComponent, { timelineItems: unref(timelineItems) }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40d7b0e7"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
