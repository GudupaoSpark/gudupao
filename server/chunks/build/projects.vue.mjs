import { resolveDirective, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, ref, watchEffect, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1, b as useI18n, u as useHead } from './server.mjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main$3 = {
  __name: "FilterSwitch",
  __ssrInlineRender: true,
  props: {
    filterOptions: {
      type: Array,
      required: true
    },
    selectedFilter: {
      type: String,
      required: true
    }
  },
  emits: ["selectFilter"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_moti = resolveDirective("moti");
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "filter-switch-container",
        initial: { opacity: 0, y: 50 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 400 } }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b259122d><div class="filter-background" data-v-b259122d></div><!--[-->`);
      ssrRenderList(__props.filterOptions, (option, index) => {
        _push(`<button${ssrRenderAttrs(mergeProps({
          key: option,
          class: ["filter-button", { active: __props.selectedFilter === option }],
          initial: { opacity: 0, x: -20 },
          visibleOnce: { opacity: 1, x: 0, transition: { duration: 400 } }
        }, ssrGetDirectiveProps(_ctx, _directive_moti)))} data-v-b259122d>${ssrInterpolate(option)}</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterSwitch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b259122d"]]);

const _sfc_main$2 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "project-card floating",
        initial: { opacity: 0, y: 50 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 300 } }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-685f9d56><div class="project-content" data-v-685f9d56><h3 style="${ssrRenderStyle({ color: __props.project.os ? "#28a745" : "#007bff" })}" data-v-685f9d56>${ssrInterpolate(__props.project.title)}</h3><p data-v-685f9d56>${ssrInterpolate(__props.project.description)}</p><div class="project-tags" data-v-685f9d56><!--[-->`);
      ssrRenderList(__props.project.tags, (tag) => {
        _push(`<span class="tag" data-v-685f9d56>${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-685f9d56"]]);

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const _sfc_main$1 = {
  __name: "ProjectModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props) {
    library.add(faTimes);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_NuxtLink = __nuxt_component_0$1;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-overlay" }, _attrs))} data-v-49aaa23f><div class="modal-content" data-v-49aaa23f><button class="close-button" data-v-49aaa23f>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "times"] }, null, _parent));
        _push(`</button><h2 style="${ssrRenderStyle({ color: __props.project.os ? "#28a745" : "#007bff" })}" data-v-49aaa23f>${ssrInterpolate(__props.project.title)}</h2><div class="project-tags" data-v-49aaa23f><!--[-->`);
        ssrRenderList(__props.project.tags, (tag) => {
          _push(`<span class="tag" data-v-49aaa23f>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><p class="description" data-v-49aaa23f>${ssrInterpolate(__props.project.description)}</p><p class="detail" data-v-49aaa23f>${ssrInterpolate(__props.project.detail)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.project.link,
          class: "project-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 了解更多 `);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "arrow-right"] }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" 了解更多 "),
                createVNode(_component_font_awesome_icon, { icon: ["fas", "arrow-right"] })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-49aaa23f"]]);

const greenColor = "#28a745";
const blueColor = "#007bff";
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedTags = ref([]);
    const { t } = useI18n();
    const selectedFilter = ref(t("projects.all"));
    const filterOptions = ref([t("projects.os"), t("projects.all"), t("projects.cs")]);
    const showModal = ref(false);
    const selectedproject = ref({ title: "", tags: [], description: "", detail: "", link: "", type: "" });
    const renderKey = ref(0);
    const projects2 = ref([]);
    useHead({
      title: t("nav.projects") + " | Gudupao"
    });
    watchEffect(async () => {
      const lang = t("lang");
      try {
        const projectsData = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../data/projects/en-us.json": () => import('./en-us.json2.mjs'), "../data/projects/zh-cn.json": () => import('./zh-cn.json2.mjs'), "../data/projects/zh-hk.json": () => import('./zh-hk.json2.mjs') }), `../data/projects/${lang}.json`, 4);
        projects2.value = projectsData.items || [];
      } catch (error) {
        console.error(`Failed to load projects data for language: ${lang}`, error);
        projects2.value = [];
      }
    });
    library.add(faSearch, faArrowRight);
    const openModal = (project) => {
      selectedproject.value = { ...project, type: project.os ? "open-source" : "commercial" };
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      selectedproject.value = null;
    };
    const uniqueTags = computed(() => {
      const tags = /* @__PURE__ */ new Set();
      projects2.value.forEach((project) => {
        project.tags.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags);
    });
    const selectFilter = (option) => {
      selectedFilter.value = option;
      renderKey.value++;
    };
    const filteredprojects = computed(() => {
      return projects2.value.filter((project) => {
        const matchesSearch = searchQuery.value === "" || project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesTags = selectedTags.value.length === 0 || selectedTags.value.every((tag) => project.tags.includes(tag));
        const matchesFilter = selectedFilter.value === t("projects.all") || selectedFilter.value === t("projects.os") && project.os || selectedFilter.value === t("projects.cs") && !project.os;
        return matchesSearch && matchesTags && matchesFilter;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FilterSwitch = __nuxt_component_0;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_ProjectCard = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      const _cssVars = { style: {
        "--4ddfa7bb": greenColor,
        "--54d64a2e": blueColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects-container" }, _attrs, _cssVars))} data-v-b0c0fac2>`);
      _push(ssrRenderComponent(_component_FilterSwitch, {
        filterOptions: unref(filterOptions),
        selectedFilter: unref(selectedFilter),
        onSelectFilter: selectFilter
      }, null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "search-section",
        initial: { opacity: 0, y: 50, scale: 0.95 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 600,
            type: "spring",
            stiffness: 50,
            damping: 15
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b0c0fac2><div${ssrRenderAttrs(mergeProps({
        class: "search-box",
        initial: { opacity: 0, scale: 0.8 },
        visibleOnce: { opacity: 1, scale: 1, transition: { duration: 400 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b0c0fac2><input${ssrRenderAttr("value", unref(searchQuery))} type="text"${ssrRenderAttr("placeholder", _ctx.$t("projects.searchPlaceholder"))} class="search-input" data-v-b0c0fac2>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "search"],
        class: "search-icon"
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        class: "tags-container",
        initial: { opacity: 0, y: 20 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 400 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b0c0fac2><!--[-->`);
      ssrRenderList(unref(uniqueTags), (tag, index) => {
        _push(`<button${ssrRenderAttrs(mergeProps({
          key: tag,
          class: ["tag-button", { active: unref(selectedTags).includes(tag) }],
          initial: { opacity: 0, x: -20 },
          visibleOnce: { opacity: 1, x: 0, transition: { duration: 400 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b0c0fac2>${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]-->`);
      if (unref(selectedTags).length > 0) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "tag-button reset-button",
          initial: { opacity: 0, x: -20 },
          visibleOnce: { opacity: 1, x: 0, transition: { duration: 400 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b0c0fac2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b0c0fac2><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" data-v-b0c0fac2></path><path d="M3 3v5h5" data-v-b0c0fac2></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([{ "few-items": unref(filteredprojects).length <= 3 }, "projects-grid"])}" data-v-b0c0fac2><!--[-->`);
      ssrRenderList(unref(filteredprojects), (project, index) => {
        _push(ssrRenderComponent(_component_ProjectCard, mergeProps({
          key: `${project.id}-${unref(renderKey)}`,
          project,
          initial: { opacity: 0, y: 100, scale: 0.5 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 800,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          },
          onClick: ($event) => openModal(project)
        }, ssrGetDirectiveProps(_ctx, _directive_motion)), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(ProjectModal, {
        show: unref(showModal),
        project: unref(selectedproject),
        onClose: closeModal
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0c0fac2"]]);

export { projects as default };
//# sourceMappingURL=projects.vue.mjs.map
